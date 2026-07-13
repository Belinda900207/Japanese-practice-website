"use strict";

const kanaData = [
    { hiragana: "あ", katakana: "ア", romaji: "a", category: "seion", order: 1, globalOrder: 1 },
    { hiragana: "い", katakana: "イ", romaji: "i", category: "seion", order: 2, globalOrder: 2 },
    { hiragana: "う", katakana: "ウ", romaji: "u", category: "seion", order: 3, globalOrder: 3 },
    { hiragana: "え", katakana: "エ", romaji: "e", category: "seion", order: 4, globalOrder: 4 },
    { hiragana: "お", katakana: "オ", romaji: "o", category: "seion", order: 5, globalOrder: 5 },

    { hiragana: "か", katakana: "カ", romaji: "ka", category: "seion", order: 6, globalOrder: 6 },
    { hiragana: "き", katakana: "キ", romaji: "ki", category: "seion", order: 7, globalOrder: 7 },
    { hiragana: "く", katakana: "ク", romaji: "ku", category: "seion", order: 8, globalOrder: 8 },
    { hiragana: "け", katakana: "ケ", romaji: "ke", category: "seion", order: 9, globalOrder: 9 },
    { hiragana: "こ", katakana: "コ", romaji: "ko", category: "seion", order: 10, globalOrder: 10 },

    { hiragana: "さ", katakana: "サ", romaji: "sa", category: "seion", order: 11, globalOrder: 11 },
    { hiragana: "し", katakana: "シ", romaji: "shi", category: "seion", order: 12, globalOrder: 12 },
    { hiragana: "す", katakana: "ス", romaji: "su", category: "seion", order: 13, globalOrder: 13 },
    { hiragana: "せ", katakana: "セ", romaji: "se", category: "seion", order: 14, globalOrder: 14 },
    { hiragana: "そ", katakana: "ソ", romaji: "so", category: "seion", order: 15, globalOrder: 15 },

    { hiragana: "た", katakana: "タ", romaji: "ta", category: "seion", order: 16, globalOrder: 16 },
    { hiragana: "ち", katakana: "チ", romaji: "chi", category: "seion", order: 17, globalOrder: 17 },
    { hiragana: "つ", katakana: "ツ", romaji: "tsu", category: "seion", order: 18, globalOrder: 18 },
    { hiragana: "て", katakana: "テ", romaji: "te", category: "seion", order: 19, globalOrder: 19 },
    { hiragana: "と", katakana: "ト", romaji: "to", category: "seion", order: 20, globalOrder: 20 },

    { hiragana: "な", katakana: "ナ", romaji: "na", category: "seion", order: 21, globalOrder: 21 },
    { hiragana: "に", katakana: "ニ", romaji: "ni", category: "seion", order: 22, globalOrder: 22 },
    { hiragana: "ぬ", katakana: "ヌ", romaji: "nu", category: "seion", order: 23, globalOrder: 23 },
    { hiragana: "ね", katakana: "ネ", romaji: "ne", category: "seion", order: 24, globalOrder: 24 },
    { hiragana: "の", katakana: "ノ", romaji: "no", category: "seion", order: 25, globalOrder: 25 },

    { hiragana: "は", katakana: "ハ", romaji: "ha", category: "seion", order: 26, globalOrder: 26 },
    { hiragana: "ひ", katakana: "ヒ", romaji: "hi", category: "seion", order: 27, globalOrder: 27 },
    { hiragana: "ふ", katakana: "フ", romaji: "fu", category: "seion", order: 28, globalOrder: 28 },
    { hiragana: "へ", katakana: "ヘ", romaji: "he", category: "seion", order: 29, globalOrder: 29 },
    { hiragana: "ほ", katakana: "ホ", romaji: "ho", category: "seion", order: 30, globalOrder: 30 },

    { hiragana: "ま", katakana: "マ", romaji: "ma", category: "seion", order: 31, globalOrder: 31 },
    { hiragana: "み", katakana: "ミ", romaji: "mi", category: "seion", order: 32, globalOrder: 32 },
    { hiragana: "む", katakana: "ム", romaji: "mu", category: "seion", order: 33, globalOrder: 33 },
    { hiragana: "め", katakana: "メ", romaji: "me", category: "seion", order: 34, globalOrder: 34 },
    { hiragana: "も", katakana: "モ", romaji: "mo", category: "seion", order: 35, globalOrder: 35 },

    { hiragana: "や", katakana: "ヤ", romaji: "ya", category: "seion", order: 36, globalOrder: 36 },
    { hiragana: "ゆ", katakana: "ユ", romaji: "yu", category: "seion", order: 37, globalOrder: 37 },
    { hiragana: "よ", katakana: "ヨ", romaji: "yo", category: "seion", order: 38, globalOrder: 38 },

    { hiragana: "ら", katakana: "ラ", romaji: "ra", category: "seion", order: 39, globalOrder: 39 },
    { hiragana: "り", katakana: "リ", romaji: "ri", category: "seion", order: 40, globalOrder: 40 },
    { hiragana: "る", katakana: "ル", romaji: "ru", category: "seion", order: 41, globalOrder: 41 },
    { hiragana: "れ", katakana: "レ", romaji: "re", category: "seion", order: 42, globalOrder: 42 },
    { hiragana: "ろ", katakana: "ロ", romaji: "ro", category: "seion", order: 43, globalOrder: 43 },

    { hiragana: "わ", katakana: "ワ", romaji: "wa", category: "seion", order: 44, globalOrder: 44 },
    { hiragana: "を", katakana: "ヲ", romaji: "wo", category: "seion", order: 45, globalOrder: 45 },
    { hiragana: "ん", katakana: "ン", romaji: "n", category: "seion", order: 46, globalOrder: 46 },

    { hiragana: "が", katakana: "ガ", romaji: "ga", category: "dakuon", order: 1, globalOrder: 47 },
    { hiragana: "ぎ", katakana: "ギ", romaji: "gi", category: "dakuon", order: 2, globalOrder: 48 },
    { hiragana: "ぐ", katakana: "グ", romaji: "gu", category: "dakuon", order: 3, globalOrder: 49 },
    { hiragana: "げ", katakana: "ゲ", romaji: "ge", category: "dakuon", order: 4, globalOrder: 50 },
    { hiragana: "ご", katakana: "ゴ", romaji: "go", category: "dakuon", order: 5, globalOrder: 51 },
    { hiragana: "ざ", katakana: "ザ", romaji: "za", category: "dakuon", order: 6, globalOrder: 52 },
    { hiragana: "じ", katakana: "ジ", romaji: "ji", category: "dakuon", order: 7, globalOrder: 53 },
    { hiragana: "ず", katakana: "ズ", romaji: "zu", category: "dakuon", order: 8, globalOrder: 54 },
    { hiragana: "ぜ", katakana: "ゼ", romaji: "ze", category: "dakuon", order: 9, globalOrder: 55 },
    { hiragana: "ぞ", katakana: "ゾ", romaji: "zo", category: "dakuon", order: 10, globalOrder: 56 },
    { hiragana: "だ", katakana: "ダ", romaji: "da", category: "dakuon", order: 11, globalOrder: 57 },
    { hiragana: "ぢ", katakana: "ヂ", romaji: "ji", category: "dakuon", order: 12, globalOrder: 58 },
    { hiragana: "づ", katakana: "ヅ", romaji: "zu", category: "dakuon", order: 13, globalOrder: 59 },
    { hiragana: "で", katakana: "デ", romaji: "de", category: "dakuon", order: 14, globalOrder: 60 },
    { hiragana: "ど", katakana: "ド", romaji: "do", category: "dakuon", order: 15, globalOrder: 61 },
    { hiragana: "ば", katakana: "バ", romaji: "ba", category: "dakuon", order: 16, globalOrder: 62 },
    { hiragana: "び", katakana: "ビ", romaji: "bi", category: "dakuon", order: 17, globalOrder: 63 },
    { hiragana: "ぶ", katakana: "ブ", romaji: "bu", category: "dakuon", order: 18, globalOrder: 64 },
    { hiragana: "べ", katakana: "ベ", romaji: "be", category: "dakuon", order: 19, globalOrder: 65 },
    { hiragana: "ぼ", katakana: "ボ", romaji: "bo", category: "dakuon", order: 20, globalOrder: 66 },

    { hiragana: "ぱ", katakana: "パ", romaji: "pa", category: "handakuon", order: 1, globalOrder: 67 },
    { hiragana: "ぴ", katakana: "ピ", romaji: "pi", category: "handakuon", order: 2, globalOrder: 68 },
    { hiragana: "ぷ", katakana: "プ", romaji: "pu", category: "handakuon", order: 3, globalOrder: 69 },
    { hiragana: "ぺ", katakana: "ペ", romaji: "pe", category: "handakuon", order: 4, globalOrder: 70 },
    { hiragana: "ぽ", katakana: "ポ", romaji: "po", category: "handakuon", order: 5, globalOrder: 71 },

    { hiragana: "きゃ", katakana: "キャ", romaji: "kya", category: "youon", order: 1, globalOrder: 72 },
    { hiragana: "きゅ", katakana: "キュ", romaji: "kyu", category: "youon", order: 2, globalOrder: 73 },
    { hiragana: "きょ", katakana: "キョ", romaji: "kyo", category: "youon", order: 3, globalOrder: 74 },
    { hiragana: "ぎゃ", katakana: "ギャ", romaji: "gya", category: "youon", order: 4, globalOrder: 75 },
    { hiragana: "ぎゅ", katakana: "ギュ", romaji: "gyu", category: "youon", order: 5, globalOrder: 76 },
    { hiragana: "ぎょ", katakana: "ギョ", romaji: "gyo", category: "youon", order: 6, globalOrder: 77 },
    { hiragana: "しゃ", katakana: "シャ", romaji: "sha", category: "youon", order: 7, globalOrder: 78 },
    { hiragana: "しゅ", katakana: "シュ", romaji: "shu", category: "youon", order: 8, globalOrder: 79 },
    { hiragana: "しょ", katakana: "ショ", romaji: "sho", category: "youon", order: 9, globalOrder: 80 },
    { hiragana: "じゃ", katakana: "ジャ", romaji: "ja", category: "youon", order: 10, globalOrder: 81 },
    { hiragana: "じゅ", katakana: "ジュ", romaji: "ju", category: "youon", order: 11, globalOrder: 82 },
    { hiragana: "じょ", katakana: "ジョ", romaji: "jo", category: "youon", order: 12, globalOrder: 83 },
    { hiragana: "ちゃ", katakana: "チャ", romaji: "cha", category: "youon", order: 13, globalOrder: 84 },
    { hiragana: "ちゅ", katakana: "チュ", romaji: "chu", category: "youon", order: 14, globalOrder: 85 },
    { hiragana: "ちょ", katakana: "チョ", romaji: "cho", category: "youon", order: 15, globalOrder: 86 },
    { hiragana: "にゃ", katakana: "ニャ", romaji: "nya", category: "youon", order: 16, globalOrder: 87 },
    { hiragana: "にゅ", katakana: "ニュ", romaji: "nyu", category: "youon", order: 17, globalOrder: 88 },
    { hiragana: "にょ", katakana: "ニョ", romaji: "nyo", category: "youon", order: 18, globalOrder: 89 },
    { hiragana: "ひゃ", katakana: "ヒャ", romaji: "hya", category: "youon", order: 19, globalOrder: 90 },
    { hiragana: "ひゅ", katakana: "ヒュ", romaji: "hyu", category: "youon", order: 20, globalOrder: 91 },
    { hiragana: "ひょ", katakana: "ヒョ", romaji: "hyo", category: "youon", order: 21, globalOrder: 92 },
    { hiragana: "びゃ", katakana: "ビャ", romaji: "bya", category: "youon", order: 22, globalOrder: 93 },
    { hiragana: "びゅ", katakana: "ビュ", romaji: "byu", category: "youon", order: 23, globalOrder: 94 },
    { hiragana: "びょ", katakana: "ビョ", romaji: "byo", category: "youon", order: 24, globalOrder: 95 },
    { hiragana: "ぴゃ", katakana: "ピャ", romaji: "pya", category: "youon", order: 25, globalOrder: 96 },
    { hiragana: "ぴゅ", katakana: "ピュ", romaji: "pyu", category: "youon", order: 26, globalOrder: 97 },
    { hiragana: "ぴょ", katakana: "ピョ", romaji: "pyo", category: "youon", order: 27, globalOrder: 98 },
    { hiragana: "みゃ", katakana: "ミャ", romaji: "mya", category: "youon", order: 28, globalOrder: 99 },
    { hiragana: "みゅ", katakana: "ミュ", romaji: "myu", category: "youon", order: 29, globalOrder: 100 },
    { hiragana: "みょ", katakana: "ミョ", romaji: "myo", category: "youon", order: 30, globalOrder: 101 },
    { hiragana: "りゃ", katakana: "リャ", romaji: "rya", category: "youon", order: 31, globalOrder: 102 },
    { hiragana: "りゅ", katakana: "リュ", romaji: "ryu", category: "youon", order: 32, globalOrder: 103 },
    { hiragana: "りょ", katakana: "リョ", romaji: "ryo", category: "youon", order: 33, globalOrder: 104 }
];

const elements = {
    modeButtons: document.querySelectorAll(".mode-button"),
    categoryButtons: document.querySelectorAll(".category-button"),

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

const state = {
    category: "seion",
    displayMode: "hiragana",
    orderMode: "standard",
    isShowingAllAnswers: false,
    currentIndex: 0,
    kanaList: []
};

const modeNames = {
    hiragana: "平假名模式",
    katakana: "片假名模式",
    both: "平假名＆片假名模式"
};

const categoryLabels = {
    seion: "清音",
    dakuon: "濁音",
    handakuon: "半濁音",
    youon: "拗音",
    all: "全部"
};

function getBaseKanaList() {
    const filteredList = state.category === "all"
        ? [...kanaData]
        : kanaData.filter((item) => item.category === state.category);

    return filteredList.slice().sort((first, second) => {
        return (first.order ?? 0) - (second.order ?? 0);
    });
}

function shuffleList(list) {
    const shuffledList = [...list];

    for (let index = shuffledList.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));

        [shuffledList[index], shuffledList[randomIndex]] = [
            shuffledList[randomIndex],
            shuffledList[index]
        ];
    }

    return shuffledList;
}

function syncKanaList() {
    const baseList = getBaseKanaList();
    state.kanaList = state.orderMode === "shuffle"
        ? shuffleList(baseList)
        : baseList;

    if (state.currentIndex >= state.kanaList.length) {
        state.currentIndex = 0;
    }
}

function renderCard() {
    syncKanaList();

    const currentKana = state.kanaList[state.currentIndex];

    if (!currentKana) {
        return;
    }

    elements.hiraganaText.textContent = currentKana.hiragana;
    elements.katakanaText.textContent = currentKana.katakana;
    elements.romajiText.textContent = currentKana.romaji;

    elements.modeLabel.textContent = `${modeNames[state.displayMode]} · ${categoryLabels[state.category]}`;
    elements.progressText.textContent = `${state.currentIndex + 1} / ${state.kanaList.length}`;

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

    elements.kanaCard.classList.add(`${state.displayMode}-mode`);

    elements.hiraganaPanel.classList.toggle(
        "is-mode-hidden",
        state.displayMode === "katakana"
    );

    elements.katakanaPanel.classList.toggle(
        "is-mode-hidden",
        state.displayMode === "hiragana"
    );

    const hiraganaOption = elements.hiraganaToggle.closest(".toggle-option");
    const katakanaOption = elements.katakanaToggle.closest(".toggle-option");

    hiraganaOption.classList.toggle("is-disabled", state.displayMode === "katakana");
    katakanaOption.classList.toggle("is-disabled", state.displayMode === "hiragana");
}

function updatePanelVisibility() {
    const shouldShowHiragana = state.displayMode !== "katakana" && elements.hiraganaToggle.checked;
    const shouldShowKatakana = state.displayMode !== "hiragana" && elements.katakanaToggle.checked;
    const shouldShowRomaji = elements.romajiToggle.checked;

    setPanelState(elements.hiraganaPanel, shouldShowHiragana || state.isShowingAllAnswers);
    setPanelState(elements.katakanaPanel, shouldShowKatakana || state.isShowingAllAnswers);
    setPanelState(elements.romajiPanel, shouldShowRomaji || state.isShowingAllAnswers);
}

function setPanelState(panel, shouldShow) {
    panel.classList.toggle("is-hidden", !shouldShow);
    panel.classList.toggle("is-revealed", shouldShow);
}

function updateModeButtons() {
    elements.modeButtons.forEach((button) => {
        const isActive = button.dataset.mode === state.displayMode;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    elements.categoryButtons.forEach((button) => {
        const isActive = button.dataset.category === state.category;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

function changeMode(newMode) {
    state.displayMode = newMode;
    state.currentIndex = 0;
    state.isShowingAllAnswers = false;
    state.orderMode = "standard";

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

    updateModeButtons();
    renderCard();
}

function changeCategory(newCategory) {
    state.category = newCategory;
    state.currentIndex = 0;
    state.isShowingAllAnswers = false;
    state.orderMode = "standard";

    updateModeButtons();
    renderCard();
}

function showNextCard() {
    if (!state.kanaList.length) {
        return;
    }

    state.currentIndex = (state.currentIndex + 1) % state.kanaList.length;
    state.isShowingAllAnswers = false;
    renderCard();
}

function showPreviousCard() {
    if (!state.kanaList.length) {
        return;
    }

    state.currentIndex = (state.currentIndex - 1 + state.kanaList.length) % state.kanaList.length;
    state.isShowingAllAnswers = false;
    renderCard();
}

function toggleAllAnswers() {
    state.isShowingAllAnswers = !state.isShowingAllAnswers;
    updatePanelVisibility();
    updateRevealButton();
}

function updateRevealButton() {
    elements.revealButton.textContent = state.isShowingAllAnswers
        ? "恢復遮擋"
        : "顯示全部答案";
}

function shuffleKana() {
    state.orderMode = "shuffle";
    state.currentIndex = 0;
    state.isShowingAllAnswers = false;
    renderCard();
}

function resetKanaOrder() {
    state.orderMode = "standard";
    state.currentIndex = 0;
    state.isShowingAllAnswers = false;
    renderCard();
}

function temporarilyRevealPanel(panel) {
    if (!panel.classList.contains("is-hidden")) {
        return;
    }

    panel.classList.remove("is-hidden");
    panel.classList.add("is-revealed");
}

function handleCardKeydown(event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleAllAnswers();
    }
}

elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        changeMode(button.dataset.mode);
    });
});

elements.categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        changeCategory(button.dataset.category);
    });
});

[
    elements.hiraganaToggle,
    elements.katakanaToggle,
    elements.romajiToggle
].forEach((toggle) => {
    toggle.addEventListener("change", () => {
        state.isShowingAllAnswers = false;
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

elements.kanaCard.addEventListener("keydown", handleCardKeydown);

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

updateModeButtons();
renderCard();