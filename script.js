"use strict";

const originalKanaList = [
    { hiragana: "あ", katakana: "ア", romaji: "a" },
    { hiragana: "い", katakana: "イ", romaji: "i" },
    { hiragana: "う", katakana: "ウ", romaji: "u" },
    { hiragana: "え", katakana: "エ", romaji: "e" },
    { hiragana: "お", katakana: "オ", romaji: "o" },

    { hiragana: "か", katakana: "カ", romaji: "ka" },
    { hiragana: "き", katakana: "キ", romaji: "ki" },
    { hiragana: "く", katakana: "ク", romaji: "ku" },
    { hiragana: "け", katakana: "ケ", romaji: "ke" },
    { hiragana: "こ", katakana: "コ", romaji: "ko" },

    { hiragana: "さ", katakana: "サ", romaji: "sa" },
    { hiragana: "し", katakana: "シ", romaji: "shi" },
    { hiragana: "す", katakana: "ス", romaji: "su" },
    { hiragana: "せ", katakana: "セ", romaji: "se" },
    { hiragana: "そ", katakana: "ソ", romaji: "so" },

    { hiragana: "た", katakana: "タ", romaji: "ta" },
    { hiragana: "ち", katakana: "チ", romaji: "chi" },
    { hiragana: "つ", katakana: "ツ", romaji: "tsu" },
    { hiragana: "て", katakana: "テ", romaji: "te" },
    { hiragana: "と", katakana: "ト", romaji: "to" },

    { hiragana: "な", katakana: "ナ", romaji: "na" },
    { hiragana: "に", katakana: "ニ", romaji: "ni" },
    { hiragana: "ぬ", katakana: "ヌ", romaji: "nu" },
    { hiragana: "ね", katakana: "ネ", romaji: "ne" },
    { hiragana: "の", katakana: "ノ", romaji: "no" },

    { hiragana: "は", katakana: "ハ", romaji: "ha" },
    { hiragana: "ひ", katakana: "ヒ", romaji: "hi" },
    { hiragana: "ふ", katakana: "フ", romaji: "fu" },
    { hiragana: "へ", katakana: "ヘ", romaji: "he" },
    { hiragana: "ほ", katakana: "ホ", romaji: "ho" },

    { hiragana: "ま", katakana: "マ", romaji: "ma" },
    { hiragana: "み", katakana: "ミ", romaji: "mi" },
    { hiragana: "む", katakana: "ム", romaji: "mu" },
    { hiragana: "め", katakana: "メ", romaji: "me" },
    { hiragana: "も", katakana: "モ", romaji: "mo" },

    { hiragana: "や", katakana: "ヤ", romaji: "ya" },
    { hiragana: "ゆ", katakana: "ユ", romaji: "yu" },
    { hiragana: "よ", katakana: "ヨ", romaji: "yo" },

    { hiragana: "ら", katakana: "ラ", romaji: "ra" },
    { hiragana: "り", katakana: "リ", romaji: "ri" },
    { hiragana: "る", katakana: "ル", romaji: "ru" },
    { hiragana: "れ", katakana: "レ", romaji: "re" },
    { hiragana: "ろ", katakana: "ロ", romaji: "ro" },

    { hiragana: "わ", katakana: "ワ", romaji: "wa" },
    { hiragana: "を", katakana: "ヲ", romaji: "wo" },
    { hiragana: "ん", katakana: "ン", romaji: "n" }
];

const elements = {
    modeButtons: document.querySelectorAll(".mode-button"),

    hiraganaToggle: document.querySelector("#hiraganaToggle"),
    katakanaToggle: document.querySelector("#katakanaToggle"),
    romajiToggle: document.querySelector("#romajiToggle"),

    kanaCard: document.querySelector("#kanaCard"),

    hiraganaPanel: document.querySelector("#hiraganaPanel"),
    katakanaPanel: document.querySelector("#katakanaPanel"),
    romajiPanel: document.querySelector("#romajiPanel"),

    hiraganaText: document.querySelector("#hiraganaText"),
    katakanaText: document.querySelector("#katakanaText"),
    romajiText: document.querySelector("#romajiText"),

    modeLabel: document.querySelector("#modeLabel"),
    progressText: document.querySelector("#progressText"),

    previousButton: document.querySelector("#previousButton"),
    nextButton: document.querySelector("#nextButton"),
    revealButton: document.querySelector("#revealButton"),
    shuffleButton: document.querySelector("#shuffleButton"),
    resetButton: document.querySelector("#resetButton")
};

let kanaList = [...originalKanaList];
let currentIndex = 0;
let currentMode = "hiragana";
let isShowingAllAnswers = false;

const modeNames = {
    hiragana: "平假名模式",
    katakana: "片假名模式",
    both: "平假名＆片假名模式"
};

function renderCard() {
    const currentKana = kanaList[currentIndex];

    elements.hiraganaText.textContent = currentKana.hiragana;
    elements.katakanaText.textContent = currentKana.katakana;
    elements.romajiText.textContent = currentKana.romaji;

    elements.modeLabel.textContent = modeNames[currentMode];
    elements.progressText.textContent =
        `${currentIndex + 1} / ${kanaList.length}`;

    updateModeLayout();
    updatePanelVisibility();
    updateRevealButton();
}

function updateModeLayout() {
    elements.kanaCard.classList.remove(
        "hiragana-mode",
        "katakana-mode",
        "both-mode"
    );

    elements.kanaCard.classList.add(`${currentMode}-mode`);

    elements.hiraganaPanel.classList.toggle(
        "is-mode-hidden",
        currentMode === "katakana"
    );

    elements.katakanaPanel.classList.toggle(
        "is-mode-hidden",
        currentMode === "hiragana"
    );

    const hiraganaOption =
        elements.hiraganaToggle.closest(".toggle-option");

    const katakanaOption =
        elements.katakanaToggle.closest(".toggle-option");

    hiraganaOption.classList.toggle(
        "is-disabled",
        currentMode === "katakana"
    );

    katakanaOption.classList.toggle(
        "is-disabled",
        currentMode === "hiragana"
    );
}

function updatePanelVisibility() {
    setPanelState(
        elements.hiraganaPanel,
        elements.hiraganaToggle.checked || isShowingAllAnswers
    );

    setPanelState(
        elements.katakanaPanel,
        elements.katakanaToggle.checked || isShowingAllAnswers
    );

    setPanelState(
        elements.romajiPanel,
        elements.romajiToggle.checked || isShowingAllAnswers
    );
}

function setPanelState(panel, shouldShow) {
    panel.classList.toggle("is-hidden", !shouldShow);
    panel.classList.toggle("is-revealed", shouldShow);
}

function changeMode(newMode) {
    currentMode = newMode;
    currentIndex = 0;
    isShowingAllAnswers = false;

    elements.modeButtons.forEach((button) => {
        const isActive = button.dataset.mode === newMode;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    if (newMode === "hiragana") {
        elements.hiraganaToggle.checked = true;
        elements.katakanaToggle.checked = false;
    }

    if (newMode === "katakana") {
        elements.hiraganaToggle.checked = false;
        elements.katakanaToggle.checked = true;
    }

    if (newMode === "both") {
        elements.hiraganaToggle.checked = true;
        elements.katakanaToggle.checked = true;
    }

    renderCard();
}

function showNextCard() {
    currentIndex = (currentIndex + 1) % kanaList.length;
    isShowingAllAnswers = false;
    renderCard();
}

function showPreviousCard() {
    currentIndex =
        (currentIndex - 1 + kanaList.length) % kanaList.length;

    isShowingAllAnswers = false;
    renderCard();
}

function toggleAllAnswers() {
    isShowingAllAnswers = !isShowingAllAnswers;
    updatePanelVisibility();
    updateRevealButton();
}

function updateRevealButton() {
    elements.revealButton.textContent = isShowingAllAnswers
        ? "恢復遮擋"
        : "顯示全部答案";
}

function shuffleKana() {
    const shuffledList = [...kanaList];

    for (let index = shuffledList.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));

        [shuffledList[index], shuffledList[randomIndex]] = [
            shuffledList[randomIndex],
            shuffledList[index]
        ];
    }

    kanaList = shuffledList;
    currentIndex = 0;
    isShowingAllAnswers = false;

    renderCard();
}

function resetKanaOrder() {
    kanaList = [...originalKanaList];
    currentIndex = 0;
    isShowingAllAnswers = false;

    renderCard();
}

function temporarilyRevealPanel(panel) {
    if (!panel.classList.contains("is-hidden")) {
        return;
    }

    panel.classList.remove("is-hidden");
    panel.classList.add("is-revealed");
}

elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        changeMode(button.dataset.mode);
    });
});

[
    elements.hiraganaToggle,
    elements.katakanaToggle,
    elements.romajiToggle
].forEach((toggle) => {
    toggle.addEventListener("change", () => {
        isShowingAllAnswers = false;
        renderCard();
    });
});

[
    elements.hiraganaPanel,
    elements.katakanaPanel,
    elements.romajiPanel
].forEach((panel) => {
    panel.addEventListener("click", () => {
        temporarilyRevealPanel(panel);
    });
});

elements.previousButton.addEventListener("click", showPreviousCard);
elements.nextButton.addEventListener("click", showNextCard);
elements.revealButton.addEventListener("click", toggleAllAnswers);
elements.shuffleButton.addEventListener("click", shuffleKana);
elements.resetButton.addEventListener("click", resetKanaOrder);

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        showNextCard();
    }

    if (event.key === "ArrowLeft") {
        showPreviousCard();
    }

    if (event.key === " " && event.target === document.body) {
        event.preventDefault();
        toggleAllAnswers();
    }
});

renderCard();