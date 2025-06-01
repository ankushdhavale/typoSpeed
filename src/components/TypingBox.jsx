import { createRef, useEffect, useMemo, useRef, useState } from "react";
import { generate } from "random-words";
import UpperMenu from "./UpperMenu";
import { useTestMode } from "../context/TestModeContext";
import Stats from "./Stats";

const TypingBox = () => {
	const { testTime } = useTestMode();
	const [countDown, setCountDown] = useState(testTime);
	const [currWordIndex, setCurrWordIndex] = useState(0);
	const [currCharIndex, setCurrCharIndex] = useState(0);
	const [correctChars, setCorrectChars] = useState(0);
	const [incorrectChars, setIncorrectChars] = useState(0);
	const [missedChars, setMissedChars] = useState(0);
	const [extraChars, setExtraChars] = useState(0);
	const [correctWords, setCorrectWords] = useState(0);
	const inputRef = useRef(null);
	const [wordsArray, setWordsArray] = useState(() => {
		return generate(15);
	});

	useEffect(() => {
		setCountDown(testTime);
		setWordsArray(generate(testTime));
	}, [testTime]);

	const wordSpanRef = useMemo(() => {
		return Array(wordsArray.length)
			.fill(0)
			.map((i) => createRef(null));
	}, [wordsArray]);

	// console.log(wordSpanRef);

	const handelInputUser = (e) => {
		const allCurrChars = wordSpanRef[currWordIndex].current.childNodes;

		if (e.keyCode == 32) {
			// Logic for spaces

			const correctCharsInWord = wordSpanRef[
				currWordIndex
			].current.querySelectorAll(".correct");
			console.log(correctCharsInWord.length);
			if (correctCharsInWord.length === allCurrChars.length) {
				setCorrectWords(correctWords + 1);
			}

			if (allCurrChars.length <= currCharIndex) {
				//Remove cursor from last places
				allCurrChars[currCharIndex - 1].classList.remove("current-right");
			} else {
				//remove curser in between of the word
				allCurrChars[currCharIndex].classList.remove("current");
			}

			wordSpanRef[currWordIndex + 1].current.childNodes[0].className =
				"current";
			setCurrWordIndex(currWordIndex + 1);
			setCurrCharIndex(0);
			return;
		}

		if (e.keyCode === 8) {
			// backspace logic

			if (currCharIndex !== 0) {
				if (allCurrChars.length === currCharIndex) {
					if (allCurrChars[currCharIndex - 1].className.includes("extra")) {
						allCurrChars[currCharIndex - 1].remove();
						allCurrChars[currCharIndex - 2].className += " current-right";
					} else {
						setMissedChars(missedChars + (allCurrChars.length - currCharIndex));
						allCurrChars[currCharIndex - 1].className = "current";
					}
					setCurrCharIndex(currCharIndex - 1);
					return;
				}

				allCurrChars[currCharIndex].className = "";
				allCurrChars[currCharIndex - 1].className = "current";
				setCurrCharIndex(currCharIndex - 1);
			}

			return;
		}

		if (currCharIndex === allCurrChars.length) {
			//extra word are typing
			let newSpan = document.createElement("span");
			newSpan.innerText = e.key;
			newSpan.className = "inCorrectColor extra current-right";
			allCurrChars[currCharIndex - 1].classList.remove("current-right");
			wordSpanRef[currWordIndex].current.append(newSpan);
			setCurrCharIndex(currCharIndex + 1);
			setExtraChars(extraChars + 1);
			return;
		}

		if (e.key === allCurrChars[currCharIndex].innerText) {
			allCurrChars[currCharIndex].className = "correctColor";
			setCorrectChars(correctChars + 1);
		} else {
			allCurrChars[currCharIndex].className = "inCorrectColor";
			setIncorrectChars(incorrectChars + 1);
		}

		if (currCharIndex + 1 === allCurrChars.length) {
			allCurrChars[currCharIndex].className += " current-right";
		} else {
			allCurrChars[currCharIndex + 1].className = "current";
		}
		setCurrCharIndex(currCharIndex + 1);
	};

	const calculateWPM = () => {
		return Math.round(correctChars / 5 / (testTime / 60));
	};

	const calculateAcc = () => {
		return Math.round((correctWords / currWordIndex) * 100);
	};
	const focusInput = () => {
		inputRef.current.focus();
	};

	useEffect(() => {
		focusInput;
		wordSpanRef[0].current.childNodes[0].className = "current";
	}, []);

	const reset = () => {
		setWordsArray(generate(50));
	};

	return (
		<div>
			<UpperMenu countDown={countDown} />
			<Stats
				wpa={calculateWPM()}
				accuracy={calculateAcc()}
				correctChars={correctChars}
				incorrectChars={incorrectChars}
				missedChars={missedChars}
				extraChars={extraChars}
			/>
			<div className='type-box' onClick={focusInput}>
				<div className='words'>
					{wordsArray.map((word, index) => (
						<span key={index} className='word' ref={wordSpanRef[index]}>
							{word.split("").map((char, i) => (
								<span key={i}>{char}</span>
							))}
						</span>
					))}
				</div>
				<input
					type='text'
					className='input-hidden'
					ref={inputRef}
					onKeyDown={handelInputUser}
				/>
			</div>
		</div>
	);
};

export default TypingBox;
