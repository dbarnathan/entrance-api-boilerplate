(function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	/*eslint no-useless-escape: "off"*/

	/**
	 * Remove special characters and return an array of tokens (words).
	 * @param  {string} input Input string
	 * @return {array}        Array of tokens
	 */
	var tokenize$1 = function(input) {
	    return input
	        .toLowerCase()
	        .replace(/\n/g, ' ')
	        .replace(/[.,\/#!?$%\^&\*;:{}=_`\"~()]/g, ' ')
	        .replace(/\s\s+/g, ' ')
	        .trim()
	        .split(' ');
	};

	function commonjsRequire(path) {
		throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
	}

	var require$$0$2 = {
		"😂": 1,
		"❤": 3,
		"♥": 3,
		"😍": 3,
		"😭": -1,
		"😘": 3,
		"😊": 3,
		"👌": 2,
		"💕": 3,
		"👏": 2,
		"😁": 2,
		"☺": 3,
		"♡": 3,
		"👍": 2,
		"😩": -2,
		"🙏": 2,
		"✌": 2,
		"😏": 1,
		"😉": 2,
		"🙌": 2,
		"🙈": 2,
		"💪": 2,
		"😄": 2,
		"😒": -2,
		"💃": 3,
		"💖": 3,
		"😃": 2,
		"😔": -1,
		"🎉": 3,
		"😜": 2,
		"🌸": 3,
		"💜": 3,
		"💙": 3,
		"✨": 1,
		"💗": 3,
		"★": 1,
		"█": -1,
		"☀": 2,
		"😡": -1,
		"😎": 2,
		"💋": 3,
		"😋": 3,
		"🙊": 2,
		"😴": -1,
		"🎶": 2,
		"💞": 3,
		"😌": 2,
		"🔫": -1,
		"💛": 3,
		"💁": 1,
		"💚": 3,
		"♫": 1,
		"😞": -1,
		"😆": 2,
		"😝": 2,
		"😪": -1,
		"😫": -1,
		"👊": 1,
		"💀": -2,
		"😀": 2,
		"😚": 3,
		"😻": 3,
		"💘": 3,
		"☕": 1,
		"👋": 2,
		"🎊": 3,
		"🍕": 2,
		"❄": 2,
		"😕": -2,
		"💔": -1,
		"😤": -2,
		"😈": 1,
		"✈": 2,
		"🔝": 2,
		"😰": -1,
		"⚽": 3,
		"😑": -2,
		"👑": 3,
		"👉": 1,
		"🍃": 1,
		"🎁": 3,
		"😠": -2,
		"🐧": 2,
		"☆": 2,
		"🍀": 1,
		"🎈": 3,
		"🎅": 1,
		"😓": -1,
		"😣": -2,
		"😐": -2,
		"✊": 2,
		"😨": -1,
		"😖": -1,
		"💤": 1,
		"💓": 3,
		"👎": -1,
		"💦": 2,
		"✔": 1,
		"😷": -1,
		"🙋": 2,
		"🎄": 2,
		"💩": -1,
		"🎵": 2,
		"😛": 3,
		"👯": 2,
		"💎": 2,
		"🌿": 1,
		"🎂": 3,
		"🌟": 1,
		"🔮": 1,
		"👫": 1,
		"🏆": 3,
		"✖": 1,
		"☝": 1,
		"😙": 3,
		"⛄": 2,
		"👅": 2,
		"♪": 2,
		"🍂": 2,
		"💏": 1,
		"🌴": 2,
		"👈": 2,
		"🌹": 3,
		"🙆": 2,
		"👻": 1,
		"💰": 1,
		"🍻": 2,
		"🙅": -2,
		"🌞": 2,
		"🍁": 2,
		"⭐": 2,
		"▪": 1,
		"🎀": 3,
		"🐷": 1,
		"🙉": 1,
		"🌺": 2,
		"💅": 1,
		"🐶": 2,
		"🌚": 2,
		"👽": 1,
		"🎤": 2,
		"👭": 2,
		"🎧": 2,
		"👆": 1,
		"🍸": 2,
		"🍷": 2,
		"®": 1,
		"🍉": 3,
		"😇": 3,
		"🏃": 2,
		"😿": -2,
		"│": 1,
		"🍺": 2,
		"▶": 1,
		"😲": -1,
		"🎸": 2,
		"🍹": 3,
		"💫": 2,
		"📚": 1,
		"😶": -1,
		"🌷": 2,
		"💝": 3,
		"💨": 1,
		"🏈": 2,
		"💍": 2,
		"☔": 1,
		"👸": 3,
		"🇪": 3,
		"░": -1,
		"🍩": 1,
		"👾": 1,
		"☁": 1,
		"🌻": 2,
		"↿": 3,
		"🐯": 2,
		"👼": 1,
		"🍔": 1,
		"😸": 2,
		"👶": 2,
		"↾": 3,
		"💐": 3,
		"🌊": 2,
		"🍦": 2,
		"🍓": 3,
		"👇": 1,
		"💆": 1,
		"🍴": 2,
		"😧": -1,
		"🇸": 2,
		"😮": 1,
		"🚫": -3,
		"😽": 2,
		"🌈": 2,
		"🙀": 1,
		"⚠": -1,
		"🎮": 2,
		"╯": -1,
		"🍆": 2,
		"🍰": 2,
		"✓": 1,
		"👐": -1,
		"🍟": 1,
		"🍌": 2,
		"💑": 3,
		"👬": -1,
		"🐣": 2,
		"🎃": 3,
		"▬": 2,
		"￼": -3,
		"🐾": 3,
		"🎓": 2,
		"🏊": 2,
		"📷": 2,
		"👄": 2,
		"🌼": 4,
		"🚶": -1,
		"🐱": 2,
		"🐸": -1,
		"🇺": 2,
		"👿": -3,
		"🚬": 2,
		"✿": 1,
		"🐒": 2,
		"🌍": 3,
		"┊": 5,
		"🐥": 3,
		"🐼": 1,
		"🎥": 1,
		"💄": 2,
		"⛔": 2,
		"🏀": 1,
		"💉": 1,
		"💟": 3,
		"🚗": 1,
		"📝": 1,
		"♦": 2,
		"💭": 1,
		"🌙": 3,
		"🐟": 3,
		"👣": 1,
		"✂": -3,
		"🗿": 2,
		"👪": -1,
		"🍭": 1,
		"🌃": 2,
		"❌": 1,
		"🐰": 3,
		"💊": 2,
		"🚨": 3,
		"😦": -2,
		"🍪": 1,
		"🍣": -2,
		"✧": 1,
		"🎆": 3,
		"🎎": 4,
		"🇩": 3,
		"✅": 2,
		"📱": 1,
		"🙍": -2,
		"🍑": 1,
		"🎼": 1,
		"🔊": 2,
		"🌌": 2,
		"🍎": 1,
		"🐻": 2,
		"╰": -1,
		"💇": 1,
		"♬": 1,
		"🔴": 2,
		"🍱": -2,
		"🍊": 2,
		"🍒": 1,
		"🐭": 3,
		"👟": 2,
		"🌎": 1,
		"🍍": 2,
		"🐮": 3,
		"📲": 1,
		"☼": 1,
		"🌅": 1,
		"🇷": 3,
		"👠": 1,
		"🌽": 2,
		"💧": -1,
		"🍬": 1,
		"😺": 2,
		"🚀": 2,
		"¦": 3,
		"💢": 1,
		"🎬": 1,
		"🍧": 1,
		"🍜": 2,
		"🐏": 3,
		"🏄": 2,
		"➤": 1,
		"⬆": 1,
		"🍋": 1,
		"🆗": 2,
		"⚪": 2,
		"📺": 2,
		"🍅": 1,
		"⛅": 2,
		"🐢": 1,
		"👙": 2,
		"🏡": 2,
		"🌾": 2,
		"◉": 1,
		"✏": 1,
		"🐬": 2,
		"🇹": 3,
		"♣": 1,
		"🐝": 1,
		"🌝": 1,
		"🇮": 3,
		"🔋": -3,
		"🐍": 1,
		"♔": 2,
		"🔵": 1,
		"😾": -2,
		"🌕": 3,
		"🐨": 2,
		"🔐": 1,
		"💿": 3,
		"🌳": 2,
		"👰": 2,
		"❀": 2,
		"⚓": 3,
		"🚴": 3,
		"▀": -1,
		"👗": 1,
		"➕": 2,
		"💬": 2,
		"▒": -1,
		"🔜": 1,
		"🍨": 1,
		"💲": 1,
		"🍙": 1,
		"🍥": -4,
		"▸": 1,
		"♛": 1,
		"😼": 1,
		"🐙": 2,
		"👨": 2,
		"🍚": 2,
		"♨": 4,
		"🎹": 1,
		"♕": 2,
		"▃": 5,
		"🇬": 1,
		"🇧": 1,
		"☠": -1,
		"🐠": 2,
		"🚹": 3,
		"💵": 2,
		"✰": 4,
		"╠": 1,
		"👛": 2,
		"🌱": 3,
		"💻": 1,
		"🌏": 1,
		"▄": -1,
		"👓": 1,
		"◄": 1,
		"⚾": -1,
		"🌲": 2,
		"👴": 1,
		"🏠": 2,
		"🍇": 1,
		"🍘": 2,
		"🐇": 1,
		"🔞": -1,
		"👵": 2,
		"◀": 1,
		"🔙": 1,
		"🌵": 1,
		"🍮": -1,
		"🎇": 3,
		"🐎": 2,
		"➔": -1,
		"🐤": 2,
		"╩": 1,
		"🌑": 2,
		"🚲": 2,
		"🐑": -1,
		"🏁": 2,
		"🎾": 3,
		"╚": 1,
		"🈹": 1,
		"👮": -2,
		"☹": -3,
		"🐵": 2,
		"✪": 1,
		"◕": 2,
		"🗼": 3,
		"▐": -1,
		"♠": 1,
		"┳": -2,
		"👺": -2,
		"🐚": 1,
		"👂": -1,
		"🗽": 1,
		"🍵": 2,
		"🆒": 2,
		"🐺": 1,
		"⇨": 2,
		"🌓": 3,
		"🔒": 1,
		"╬": -1,
		"👳": 3,
		"🌂": 1,
		"🚌": 1,
		"♩": 3,
		"🍡": -1,
		"❥": 1,
		"🎡": 1,
		"💌": 2,
		"🐩": 2,
		"🌜": 2,
		"⌚": 1,
		"🚿": 3,
		"🔆": 3,
		"🌛": 3,
		"💂": -1,
		"🐔": 1,
		"🙎": -1,
		"🏩": 2,
		"🇫": 2,
		"🔨": -1,
		"📢": 2,
		"🐦": 2,
		"🐲": -1,
		"♻": 2,
		"🌘": 3,
		"🌔": 3,
		"👖": 2,
		"😗": 3,
		"🐄": 1,
		"◟": -1,
		"🍢": -1,
		"🎨": 1,
		"⬇": 2,
		"🚼": 3,
		"🇴": 2,
		"🌗": 3,
		"🌖": 3,
		"🔅": 5,
		"👜": 1,
		"🐌": 3,
		"💼": 3,
		"🐹": 1,
		"🌠": 3,
		"🐈": 1,
		"🌁": 1,
		"⚫": 1,
		"♧": 2,
		"🏰": 1,
		"🚵": 2,
		"🎢": 2,
		"🎷": 3,
		"🎐": 1,
		"┈": -4,
		"╗": 2,
		"🌇": 3,
		"⏰": 2,
		"🚂": 1,
		"◠": 2,
		"🎿": 2,
		"🆔": 4,
		"🌒": 3,
		"🐪": 3,
		"╔": 1,
		"╝": 2,
		"👔": 2,
		"🆓": 1,
		"🐋": 1,
		"▽": 2,
		"🐛": 1,
		"👕": 2,
		"💳": 2,
		"🏧": 5,
		"💡": 3,
		"⬅": 2,
		"🐫": 2,
		"🇱": 2,
		"📹": 2,
		"👞": 2,
		"👚": 3,
		"□": -2,
		"🚣": 3,
		"🏉": 3,
		"🗻": 3,
		"╦": 2,
		"⛺": 3,
		"🐕": 1,
		"🏂": 2,
		"👡": 2,
		"📻": 2,
		"✒": 1,
		"🌰": 3,
		"🏢": 1,
		"🎒": 3,
		"⌒": 3,
		"🏫": -2,
		"📴": 4,
		"🚢": 1,
		"🚚": -1,
		"🐉": 1,
		"❒": 1,
		"🔔": 5,
		"◢": 4,
		"🏥": 1,
		"🚖": -1,
		"▌": -2,
		"☛": 2,
		"💒": 3,
		"🚤": 2,
		"🐐": 2,
		"■": -2,
		"🔚": 2,
		"🎻": 2,
		"🔷": 1,
		"🎽": 2,
		"📅": 1,
		"🎺": 3,
		"🍈": -3,
		"✉": 1,
		"◤": 5,
		"○": 3,
		"🍼": 3,
		"🚛": -2,
		"📓": 1,
		"☉": 1,
		"💴": -2,
		"➰": -1,
		"🔌": -1,
		"📕": 1,
		"📣": 2,
		"🚓": 1,
		"🐗": 3,
		"⛳": 4,
		"┻": -3,
		"┛": 3,
		"┃": 2,
		"💺": 1,
		"🏇": -1,
		"☻": 1,
		"📞": 2,
		"Ⓐ": -1,
		"🌉": 3,
		"🚩": -2,
		"✎": 3,
		"📃": 2,
		"🏨": 1,
		"📌": -3,
		"♎": -1,
		"💷": 2,
		"🚄": 3,
		"▲": 3,
		"⛵": 3,
		"🔸": 1,
		"🚜": 5,
		"🐆": 2,
		"👒": 1,
		"❕": 1,
		"🔛": 2,
		"♢": 2,
		"🇲": 2,
		"❅": 4,
		"👝": 2,
		"✞": 2,
		"◡": 1,
		"🎋": 3,
		"👥": 1,
		"🐡": 1,
		"◆": 4,
		"🔭": 2,
		"🎪": 1,
		"🐜": 3,
		"♌": 4,
		"☐": -5,
		"👷": 1,
		"🔈": 1,
		"📄": 5,
		"🚐": 4,
		"🌋": 3,
		"📡": 1,
		"🚳": 5,
		"✘": 4,
		"🅰": 1,
		"🇼": 2,
		"┓": 3,
		"┣": 3,
		"Ⓛ": 2,
		"Ⓔ": 2,
		"👤": 4,
		"🚁": 1,
		"🎠": 3,
		"🐁": -2,
		"📗": 1,
		"┐": -1,
		"♂": 1,
		"📯": -1,
		"🔩": 1,
		"👢": 4,
		"◂": 2,
		"📰": 1,
		"📶": 2,
		"🌄": 1,
		"🗾": 2,
		"🔶": 2,
		"🏤": 2,
		"🎩": 2,
		"Ⓜ": 1,
		"🔧": -4,
		"🐅": 1,
		"♮": 1,
		"🅾": -1,
		"📦": 1,
		"🚊": 1,
		"🔲": 3,
		"△": 1,
		"📆": 5,
		"❛": 2,
		"📉": 2,
		"▵": 2,
		"🔎": 3,
		"☜": 1,
		"🇯": 2,
		"🇵": 2,
		"📘": 1,
		"ⓔ": 3,
		"🔑": 1,
		"⭕": 2,
		"🔘": 1,
		"🚭": 5,
		"🚉": 3,
		"🚪": 3,
		"➳": 2,
		"🚃": 3,
		"┯": -3,
		"🆙": 2,
		"🆖": 1,
		"┗": 5,
		"Ⓞ": 2,
		"❇": 3,
		"✴": 3,
		"☊": 5,
		"🔕": -2,
		"⬛": -2,
		"🚞": 3,
		"🍶": 3,
		"🌐": 3,
		"♀": 1,
		"🚅": 3,
		"🚒": -2,
		"♋": 1,
		"♍": 3,
		"🕝": -2,
		"ⓐ": 5,
		"📙": 1,
		"Ⓢ": 1,
		"📋": 3,
		"🎱": 1,
		"🐞": 1,
		"🔺": 1,
		"ⓡ": 5,
		"♤": 3,
		"🎯": 3,
		"🔉": 3,
		"↩": 5,
		"🚾": 1,
		"🎣": -4,
		"🔣": 1,
		"❎": -5,
		"➥": 1,
		"🎌": 5,
		"◣": 1,
		"⏬": 5,
		"♭": 1,
		"ⓞ": 5,
		"🔳": 2,
		"🏭": 2,
		"🎳": -3,
		"☚": 5,
		"➽": 2,
		"➫": 2,
		"➖": -5,
		"꒰": 2,
		"꒱": 2,
		"◝": -3,
		"📑": 5,
		"ⓧ": 5,
		"🔟": 5,
		"〓": 5,
		"ⓜ": 2,
		"➠": 5,
		"🚆": 2,
		"℅": -5,
		"☃": 2,
		"🚽": 5,
		"ⓝ": 5,
		"⇦": 5,
		"👲": 2,
		"🚡": -3,
		"🔬": 5,
		"➗": -3,
		"📈": 2,
		"⏪": 2,
		"◎": 5,
		"꒦": -5,
		"📎": 5,
		"⑅": 5,
		"✭": 5,
		"♓": 2,
		"┏": 5,
		"☇": 5,
		"࿎": -5,
		"👘": 5,
		"↙": 5,
		"Ⓕ": 2,
		"Ⓦ": 2,
		"Ⓟ": 2,
		"🕑": 2,
		"🕛": 5,
		"♈": -5,
		"↬": 5,
		"✍": 5,
		"🏦": 5,
		"🔻": 5,
		"ⓟ": 5,
		"ⓕ": 5,
		"ⓘ": 5,
		"♿": 5,
		"⇗": 5,
		"⇘": 5,
		"ⓨ": 5,
		"ⓙ": 5,
		"▫": 5,
		"🔇": 5,
		"⌃": -5,
		"🔖": 5,
		"📜": 5,
		"🚝": 5,
		"┘": -5,
		"✝": -5,
		"⍣": -5,
		"📮": -5,
		"🕕": -5,
		"🔯": 5,
		"➸": 5,
		"꒵": 5,
		"🕥": -5,
		"✽": 5,
		"📼": 5,
		"🕐": -5,
		"🀄": 5,
		"✬": 5,
		"✫": 5,
		"🕔": -5,
		"❣": 5,
		"📫": 5,
		"🉐": 5,
		"🈂": -5,
		"🎰": -5,
		"҂": -5,
		"╤": -5,
		"📔": 5
	};

	var abandon = -2;
	var abandoned = -2;
	var abandons = -2;
	var abducted = -2;
	var abduction = -2;
	var abductions = -2;
	var abhor = -3;
	var abhorred = -3;
	var abhorrent = -3;
	var abhors = -3;
	var abilities = 2;
	var ability = 2;
	var aboard = 1;
	var aborted = -1;
	var aborts = -1;
	var absentee = -1;
	var absentees = -1;
	var absolve = 2;
	var absolved = 2;
	var absolves = 2;
	var absolving = 2;
	var absorbed = 1;
	var abuse = -3;
	var abused = -3;
	var abuses = -3;
	var abusing = -3;
	var abusive = -3;
	var accept = 1;
	var acceptable = 1;
	var acceptance = 1;
	var accepted = 1;
	var accepting = 1;
	var accepts = 1;
	var accessible = 1;
	var accident = -2;
	var accidental = -2;
	var accidentally = -2;
	var accidents = -2;
	var acclaim = 2;
	var acclaimed = 2;
	var accolade = 2;
	var accomplish = 2;
	var accomplished = 2;
	var accomplishes = 2;
	var accomplishment = 2;
	var accomplishments = 2;
	var accusation = -2;
	var accusations = -2;
	var accuse = -2;
	var accused = -2;
	var accuses = -2;
	var accusing = -2;
	var ache = -2;
	var achievable = 1;
	var aching = -2;
	var acquit = 2;
	var acquits = 2;
	var acquitted = 2;
	var acquitting = 2;
	var acrimonious = -3;
	var active = 1;
	var adequate = 1;
	var admire = 3;
	var admired = 3;
	var admires = 3;
	var admiring = 3;
	var admit = -1;
	var admits = -1;
	var admitted = -1;
	var admonish = -2;
	var admonished = -2;
	var adopt = 1;
	var adopts = 1;
	var adorable = 3;
	var adoration = 3;
	var adore = 3;
	var adored = 3;
	var adores = 3;
	var adoring = 3;
	var adoringly = 3;
	var advanced = 1;
	var advantage = 2;
	var advantageous = 2;
	var advantageously = 2;
	var advantages = 2;
	var adventure = 2;
	var adventures = 2;
	var adventurous = 2;
	var adversary = -1;
	var advisable = 1;
	var affected = -1;
	var affection = 3;
	var affectionate = 3;
	var affectionateness = 3;
	var afflicted = -1;
	var affordable = 2;
	var affronted = -1;
	var aficionados = 2;
	var afraid = -2;
	var aggravate = -2;
	var aggravated = -2;
	var aggravates = -2;
	var aggravating = -2;
	var aggression = -2;
	var aggressions = -2;
	var aggressive = -2;
	var aggressiveness = -2;
	var aghast = -2;
	var agog = 2;
	var agonise = -3;
	var agonised = -3;
	var agonises = -3;
	var agonising = -3;
	var agonize = -3;
	var agonized = -3;
	var agonizes = -3;
	var agonizing = -3;
	var agree = 1;
	var agreeable = 2;
	var agreed = 1;
	var agreement = 1;
	var agrees = 1;
	var alarm = -2;
	var alarmed = -2;
	var alarmist = -2;
	var alarmists = -2;
	var alas = -1;
	var alert = -1;
	var alienation = -2;
	var alive = 1;
	var allegation = -2;
	var allegations = -2;
	var allergic = -2;
	var allow = 1;
	var ally = 2;
	var alone = -2;
	var altruistic = 2;
	var amaze = 2;
	var amazed = 2;
	var amazes = 2;
	var amazing = 4;
	var ambitious = 2;
	var ambivalent = -1;
	var amicable = 2;
	var amuse = 3;
	var amused = 3;
	var amusement = 3;
	var amusements = 3;
	var anger = -3;
	var angered = -3;
	var angers = -3;
	var angry = -3;
	var anguish = -3;
	var anguished = -3;
	var animosity = -2;
	var annoy = -2;
	var annoyance = -2;
	var annoyed = -2;
	var annoying = -2;
	var annoys = -2;
	var antagonistic = -2;
	var anti = -1;
	var anticipation = 1;
	var anxiety = -2;
	var anxious = -2;
	var apathetic = -3;
	var apathy = -3;
	var apeshit = -3;
	var apocalyptic = -2;
	var apologise = -1;
	var apologised = -1;
	var apologises = -1;
	var apologising = -1;
	var apologize = -1;
	var apologized = -1;
	var apologizes = -1;
	var apologizing = -1;
	var apology = -1;
	var appalled = -2;
	var appalling = -2;
	var appealing = 2;
	var appease = 2;
	var appeased = 2;
	var appeases = 2;
	var appeasing = 2;
	var applaud = 2;
	var applauded = 2;
	var applauding = 2;
	var applauds = 2;
	var applause = 2;
	var appreciate = 2;
	var appreciated = 2;
	var appreciates = 2;
	var appreciating = 2;
	var appreciation = 2;
	var apprehensive = -2;
	var appropriate = 2;
	var appropriately = 2;
	var approval = 2;
	var approved = 2;
	var approves = 2;
	var ardent = 1;
	var arrest = -2;
	var arrested = -3;
	var arrests = -2;
	var arrogant = -2;
	var arsehole = -4;
	var ashame = -2;
	var ashamed = -2;
	var ass = -4;
	var assassination = -3;
	var assassinations = -3;
	var assault = -2;
	var assaults = -2;
	var asset = 2;
	var assets = 2;
	var assfucking = -4;
	var asshole = -4;
	var astonished = 2;
	var astound = 3;
	var astounded = 3;
	var astounding = 3;
	var astoundingly = 3;
	var astounds = 3;
	var atrocious = -3;
	var atrocity = -3;
	var attack = -1;
	var attacked = -1;
	var attacking = -1;
	var attacks = -1;
	var attract = 1;
	var attracted = 1;
	var attracting = 2;
	var attraction = 2;
	var attractions = 2;
	var attractive = 2;
	var attractively = 2;
	var attractiveness = 2;
	var attracts = 1;
	var audacious = 3;
	var aura = 1;
	var authority = 1;
	var avenge = -2;
	var avenged = -2;
	var avenger = -2;
	var avengers = -2;
	var avenges = -2;
	var avenging = -2;
	var avert = -1;
	var averted = -1;
	var averts = -1;
	var avid = 2;
	var avoid = -1;
	var avoided = -1;
	var avoids = -1;
	var awaited = -1;
	var awaits = -1;
	var award = 3;
	var awarded = 3;
	var awards = 3;
	var awesome = 4;
	var awful = -3;
	var awkward = -2;
	var axe = -1;
	var axed = -1;
	var backed = 1;
	var backing = 2;
	var backs = 1;
	var bad = -3;
	var badass = -3;
	var badly = -3;
	var badness = -3;
	var bailout = -2;
	var balanced = 1;
	var bamboozle = -2;
	var bamboozled = -2;
	var bamboozles = -2;
	var ban = -2;
	var banish = -1;
	var bankrupt = -3;
	var bankruptcy = -3;
	var bankster = -3;
	var banned = -2;
	var barbarian = -2;
	var barbaric = -2;
	var barbarous = -2;
	var bargain = 2;
	var barrier = -2;
	var bastard = -5;
	var bastards = -5;
	var battle = -1;
	var battled = -1;
	var battles = -1;
	var battling = -2;
	var beaten = -2;
	var beatific = 3;
	var beating = -1;
	var beauties = 3;
	var beautiful = 3;
	var beautifully = 3;
	var beautify = 3;
	var beauty = 3;
	var befit = 2;
	var befitting = 2;
	var belittle = -2;
	var belittled = -2;
	var beloved = 3;
	var benefactor = 2;
	var benefactors = 2;
	var benefit = 2;
	var benefits = 2;
	var benefitted = 2;
	var benefitting = 2;
	var benevolent = 3;
	var bereave = -2;
	var bereaved = -2;
	var bereaves = -2;
	var bereaving = -2;
	var best = 3;
	var betray = -3;
	var betrayal = -3;
	var betrayed = -3;
	var betraying = -3;
	var betrays = -3;
	var better = 2;
	var bias = -1;
	var biased = -2;
	var big = 1;
	var bitch = -5;
	var bitches = -5;
	var bitter = -2;
	var bitterest = -2;
	var bitterly = -2;
	var bizarre = -2;
	var blackmail = -3;
	var blackmailed = -3;
	var blackmailing = -3;
	var blackmails = -3;
	var blah = -2;
	var blame = -2;
	var blamed = -2;
	var blames = -2;
	var blaming = -2;
	var bless = 2;
	var blesses = 2;
	var blessing = 3;
	var blessings = 3;
	var blind = -1;
	var bliss = 3;
	var blissful = 3;
	var blithe = 2;
	var bloated = -1;
	var block = -1;
	var blockade = -2;
	var blockbuster = 3;
	var blocked = -1;
	var blocking = -1;
	var blocks = -1;
	var bloody = -3;
	var blurry = -2;
	var boastful = -2;
	var bold = 2;
	var boldly = 2;
	var bomb = -1;
	var boost = 1;
	var boosted = 1;
	var boosting = 1;
	var boosts = 1;
	var bore = -2;
	var bored = -2;
	var boring = -3;
	var bother = -2;
	var bothered = -2;
	var bothers = -2;
	var bothersome = -2;
	var boycott = -2;
	var boycotted = -2;
	var boycotting = -2;
	var boycotts = -2;
	var brainwashing = -3;
	var brave = 2;
	var braveness = 2;
	var bravery = 2;
	var bravura = 3;
	var breach = -2;
	var breached = -2;
	var breaches = -2;
	var breaching = -2;
	var breakthrough = 3;
	var breathtaking = 5;
	var bribe = -3;
	var bribed = -3;
	var bribes = -3;
	var bribing = -3;
	var bright = 1;
	var brightest = 2;
	var brightness = 1;
	var brilliant = 4;
	var brilliance = 3;
	var brilliances = 3;
	var brisk = 2;
	var broke = -1;
	var broken = -1;
	var brooding = -2;
	var brutal = -3;
	var brutally = -3;
	var bullied = -2;
	var bullshit = -4;
	var bully = -2;
	var bullying = -2;
	var bummer = -2;
	var buoyant = 2;
	var burden = -2;
	var burdened = -2;
	var burdening = -2;
	var burdens = -2;
	var burglar = -2;
	var burglary = -2;
	var calm = 2;
	var calmed = 2;
	var calming = 2;
	var calms = 2;
	var cancel = -1;
	var cancelled = -1;
	var cancelling = -1;
	var cancels = -1;
	var cancer = -1;
	var capabilities = 1;
	var capability = 1;
	var capable = 1;
	var captivated = 3;
	var care = 2;
	var carefree = 1;
	var careful = 2;
	var carefully = 2;
	var carefulness = 2;
	var careless = -2;
	var cares = 2;
	var caring = 2;
	var casualty = -2;
	var catastrophe = -3;
	var catastrophic = -4;
	var cautious = -1;
	var celebrate = 3;
	var celebrated = 3;
	var celebrates = 3;
	var celebrating = 3;
	var celebration = 3;
	var celebrations = 3;
	var censor = -2;
	var censored = -2;
	var censors = -2;
	var certain = 1;
	var chagrin = -2;
	var chagrined = -2;
	var challenge = -1;
	var champion = 2;
	var championed = 2;
	var champions = 2;
	var chance = 2;
	var chances = 2;
	var chaos = -2;
	var chaotic = -2;
	var charged = -3;
	var charges = -2;
	var charisma = 2;
	var charitable = 2;
	var charm = 3;
	var charming = 3;
	var charmingly = 3;
	var charmless = -3;
	var chastise = -3;
	var chastised = -3;
	var chastises = -3;
	var chastising = -3;
	var cheat = -3;
	var cheated = -3;
	var cheater = -3;
	var cheaters = -3;
	var cheating = -3;
	var cheats = -3;
	var cheer = 2;
	var cheered = 2;
	var cheerful = 2;
	var cheerfully = 2;
	var cheering = 2;
	var cheerless = -2;
	var cheers = 2;
	var cheery = 3;
	var cherish = 2;
	var cherished = 2;
	var cherishes = 2;
	var cherishing = 2;
	var chic = 2;
	var chide = -3;
	var chided = -3;
	var chides = -3;
	var chiding = -3;
	var childish = -2;
	var chilling = -1;
	var choke = -2;
	var choked = -2;
	var chokes = -2;
	var choking = -2;
	var clarifies = 2;
	var clarity = 2;
	var clash = -2;
	var classy = 3;
	var clean = 2;
	var cleaner = 2;
	var clear = 1;
	var cleared = 1;
	var clearly = 1;
	var clears = 1;
	var clever = 2;
	var clouded = -1;
	var clueless = -2;
	var cock = -5;
	var cocksucker = -5;
	var cocksuckers = -5;
	var cocky = -2;
	var coerced = -2;
	var coercion = -2;
	var collapse = -2;
	var collapsed = -2;
	var collapses = -2;
	var collapsing = -2;
	var collide = -1;
	var collides = -1;
	var colliding = -1;
	var collision = -2;
	var collisions = -2;
	var colluding = -3;
	var combat = -1;
	var combats = -1;
	var comedy = 1;
	var comfort = 2;
	var comfortable = 2;
	var comfortably = 2;
	var comforting = 2;
	var comforts = 2;
	var comic = 1;
	var commend = 2;
	var commended = 2;
	var commit = 1;
	var commitment = 2;
	var commits = 1;
	var committed = 1;
	var committing = 1;
	var compassion = 2;
	var compassionate = 2;
	var compelled = 1;
	var competencies = 1;
	var competent = 2;
	var competitive = 2;
	var complacent = -2;
	var complain = -2;
	var complained = -2;
	var complaining = -2;
	var complains = -2;
	var complaint = -2;
	var complaints = -2;
	var complicating = -2;
	var compliment = 2;
	var complimented = 2;
	var compliments = 2;
	var comprehensive = 2;
	var concerned = -2;
	var conciliate = 2;
	var conciliated = 2;
	var conciliates = 2;
	var conciliating = 2;
	var condemn = -2;
	var condemnation = -2;
	var condemned = -2;
	var condemns = -2;
	var confidence = 2;
	var confident = 2;
	var confidently = 2;
	var conflict = -2;
	var conflicting = -2;
	var conflictive = -2;
	var conflicts = -2;
	var confuse = -2;
	var confused = -2;
	var confusing = -2;
	var congrats = 2;
	var congratulate = 2;
	var congratulation = 2;
	var congratulations = 2;
	var consent = 2;
	var consents = 2;
	var consolable = 2;
	var conspiracy = -3;
	var constipation = -2;
	var constrained = -2;
	var contagion = -2;
	var contagions = -2;
	var contagious = -1;
	var contaminant = -2;
	var contaminants = -2;
	var contaminate = -2;
	var contaminated = -2;
	var contaminates = -2;
	var contaminating = -2;
	var contamination = -2;
	var contaminations = -2;
	var contempt = -2;
	var contemptible = -2;
	var contemptuous = -2;
	var contemptuously = -2;
	var contend = -1;
	var contender = -1;
	var contending = -1;
	var contentious = -2;
	var contestable = -2;
	var controversial = -2;
	var controversially = -2;
	var controversies = -2;
	var controversy = -2;
	var convicted = -2;
	var convince = 1;
	var convinced = 1;
	var convinces = 1;
	var convivial = 2;
	var cool = 1;
	var cornered = -2;
	var corpse = -1;
	var corrupt = -3;
	var corrupted = -3;
	var corrupting = -3;
	var corruption = -3;
	var corrupts = -3;
	var costly = -2;
	var courage = 2;
	var courageous = 2;
	var courageously = 2;
	var courageousness = 2;
	var courteous = 2;
	var courtesy = 2;
	var coward = -2;
	var cowardly = -2;
	var coziness = 2;
	var cramp = -1;
	var crap = -3;
	var crappy = -3;
	var crash = -2;
	var crazier = -2;
	var craziest = -2;
	var crazy = -2;
	var creative = 2;
	var crestfallen = -2;
	var cried = -2;
	var cries = -2;
	var crime = -3;
	var crimes = -3;
	var criminal = -3;
	var criminals = -3;
	var criminate = -3;
	var criminated = -3;
	var criminates = -3;
	var crisis = -3;
	var critic = -2;
	var criticise = -2;
	var criticised = -2;
	var criticises = -2;
	var criticising = -2;
	var criticism = -2;
	var criticize = -2;
	var criticized = -2;
	var criticizes = -2;
	var criticizing = -2;
	var critics = -2;
	var critique = -2;
	var crowding = -1;
	var crude = -1;
	var cruel = -3;
	var cruelty = -3;
	var crush = -1;
	var crushed = -2;
	var crushes = -1;
	var crushing = -1;
	var cry = -1;
	var crying = -2;
	var cunning = 2;
	var cunt = -5;
	var curious = 1;
	var curse = -1;
	var cut = -1;
	var cutback = -2;
	var cutbacks = -2;
	var cute = 2;
	var cuts = -1;
	var cutting = -1;
	var cynic = -2;
	var cynical = -2;
	var cynicism = -2;
	var damage = -3;
	var damaged = -3;
	var damages = -3;
	var damaging = -3;
	var damn = -2;
	var damned = -4;
	var damnit = -4;
	var danger = -2;
	var dangerous = -2;
	var dangerously = -2;
	var daredevil = 2;
	var daring = 2;
	var darkest = -2;
	var darkness = -1;
	var dauntless = 2;
	var dazzling = 3;
	var dead = -3;
	var deadening = -2;
	var deadlock = -2;
	var deadly = -3;
	var deafening = -1;
	var dear = 2;
	var dearly = 3;
	var death = -2;
	var deaths = -2;
	var debonair = 2;
	var debt = -2;
	var deceit = -3;
	var deceitful = -3;
	var deceive = -3;
	var deceived = -3;
	var deceives = -3;
	var deceiving = -3;
	var deception = -3;
	var deceptive = -3;
	var decisive = 1;
	var dedicated = 2;
	var dedication = 2;
	var defeat = -2;
	var defeated = -2;
	var defect = -3;
	var defective = -3;
	var defects = -3;
	var defender = 2;
	var defenders = 2;
	var defenseless = -2;
	var defer = -1;
	var deferring = -1;
	var defiant = -1;
	var deficient = -2;
	var deficiency = -2;
	var deficiencies = -2;
	var deficit = -2;
	var deformed = -2;
	var deformities = -2;
	var deformity = -2;
	var defraud = -3;
	var defrauds = -3;
	var deft = 2;
	var defunct = -2;
	var degrade = -2;
	var degraded = -2;
	var degrades = -2;
	var dehumanize = -2;
	var dehumanized = -2;
	var dehumanizes = -2;
	var dehumanizing = -2;
	var deject = -2;
	var dejected = -2;
	var dejecting = -2;
	var dejects = -2;
	var delay = -1;
	var delayed = -1;
	var delectable = 3;
	var delicious = 3;
	var delight = 3;
	var delighted = 3;
	var delightful = 3;
	var delightfully = 3;
	var delighting = 3;
	var delights = 3;
	var demand = -1;
	var demanded = -1;
	var demanding = -1;
	var demands = -1;
	var demonstration = -1;
	var demoralize = -2;
	var demoralized = -2;
	var demoralizes = -2;
	var demoralizing = -2;
	var denial = -2;
	var denials = -2;
	var denied = -2;
	var denier = -2;
	var deniers = -2;
	var denies = -2;
	var denounce = -2;
	var denounces = -2;
	var dent = -2;
	var deny = -2;
	var denying = -2;
	var deplore = -3;
	var deplored = -3;
	var deplores = -3;
	var deploring = -3;
	var deport = -2;
	var deported = -2;
	var deporting = -2;
	var deports = -2;
	var deportation = -2;
	var deportations = -2;
	var depressed = -2;
	var depressing = -2;
	var deprivation = -3;
	var derail = -2;
	var derailed = -2;
	var derails = -2;
	var derelict = -2;
	var deride = -2;
	var derided = -2;
	var derides = -2;
	var deriding = -2;
	var derision = -2;
	var desirable = 2;
	var desire = 1;
	var desired = 2;
	var desirous = 2;
	var despair = -3;
	var despairing = -3;
	var despairs = -3;
	var desperate = -3;
	var desperately = -3;
	var despondent = -3;
	var destroy = -3;
	var destroyed = -3;
	var destroying = -3;
	var destroys = -3;
	var destruction = -3;
	var destructive = -3;
	var detached = -1;
	var detain = -2;
	var detained = -2;
	var detention = -2;
	var deteriorate = -2;
	var deteriorated = -2;
	var deteriorates = -2;
	var deteriorating = -2;
	var determined = 2;
	var deterrent = -2;
	var detract = -1;
	var detracted = -1;
	var detracts = -1;
	var devastate = -2;
	var devastated = -2;
	var devastating = -2;
	var devastation = -2;
	var devastations = -2;
	var devoted = 3;
	var devotion = 2;
	var devotional = 2;
	var diamond = 1;
	var dick = -4;
	var dickhead = -4;
	var die = -3;
	var died = -3;
	var difficult = -1;
	var diffident = -2;
	var dignity = 2;
	var dilemma = -1;
	var dilligence = 2;
	var dipshit = -3;
	var dire = -3;
	var direful = -3;
	var dirt = -2;
	var dirtier = -2;
	var dirtiest = -2;
	var dirty = -2;
	var disabilities = -2;
	var disability = -2;
	var disabling = -1;
	var disadvantage = -2;
	var disadvantaged = -2;
	var disagree = -2;
	var disagreeable = -2;
	var disagreement = -2;
	var disappear = -1;
	var disappeared = -1;
	var disappears = -1;
	var disappoint = -2;
	var disappointed = -2;
	var disappointing = -2;
	var disappointment = -2;
	var disappointments = -2;
	var disappoints = -2;
	var disapproval = -2;
	var disapprovals = -2;
	var disapprove = -2;
	var disapproved = -2;
	var disapproves = -2;
	var disapproving = -2;
	var disaster = -2;
	var disasters = -2;
	var disastrous = -3;
	var disbelieve = -2;
	var discard = -1;
	var discarded = -1;
	var discarding = -1;
	var discards = -1;
	var discernment = 2;
	var discomfort = -2;
	var disconsolate = -2;
	var disconsolation = -2;
	var discontented = -2;
	var discord = -2;
	var discounted = -1;
	var discouraged = -2;
	var discredited = -2;
	var discriminate = -2;
	var discriminated = -2;
	var discriminates = -2;
	var discriminating = -2;
	var discriminatory = -2;
	var disdain = -2;
	var disease = -1;
	var diseases = -1;
	var disgrace = -2;
	var disgraced = -2;
	var disguise = -1;
	var disguised = -1;
	var disguises = -1;
	var disguising = -1;
	var disgust = -3;
	var disgusted = -3;
	var disgustful = -3;
	var disgusting = -3;
	var disheartened = -2;
	var dishonest = -2;
	var disillusioned = -2;
	var disinclined = -2;
	var disjointed = -2;
	var dislike = -2;
	var disliked = -2;
	var dislikes = -2;
	var dismal = -2;
	var dismayed = -2;
	var dismissed = -2;
	var disorder = -2;
	var disorders = -2;
	var disorganized = -2;
	var disoriented = -2;
	var disparage = -2;
	var disparaged = -2;
	var disparages = -2;
	var disparaging = -2;
	var displeased = -2;
	var displeasure = -2;
	var disproportionate = -2;
	var dispute = -2;
	var disputed = -2;
	var disputes = -2;
	var disputing = -2;
	var disqualified = -2;
	var disquiet = -2;
	var disregard = -2;
	var disregarded = -2;
	var disregarding = -2;
	var disregards = -2;
	var disrespect = -2;
	var disrespected = -2;
	var disrupt = -2;
	var disrupted = -2;
	var disrupting = -2;
	var disruption = -2;
	var disruptions = -2;
	var disruptive = -2;
	var disrupts = -2;
	var dissatisfied = -2;
	var distasteful = -2;
	var distinguished = 2;
	var distort = -2;
	var distorted = -2;
	var distorting = -2;
	var distorts = -2;
	var distract = -2;
	var distracted = -2;
	var distraction = -2;
	var distracts = -2;
	var distress = -2;
	var distressed = -2;
	var distresses = -2;
	var distressing = -2;
	var distrust = -3;
	var distrustful = -3;
	var disturb = -2;
	var disturbed = -2;
	var disturbing = -2;
	var disturbs = -2;
	var dithering = -2;
	var diverting = -1;
	var dizzy = -1;
	var dodging = -2;
	var dodgy = -2;
	var dolorous = -2;
	var donate = 2;
	var donated = 2;
	var donates = 2;
	var donating = 2;
	var donation = 2;
	var doom = -2;
	var doomed = -2;
	var doubt = -1;
	var doubted = -1;
	var doubtful = -1;
	var doubting = -1;
	var doubts = -1;
	var douche = -3;
	var douchebag = -3;
	var dour = -2;
	var downcast = -2;
	var downer = -2;
	var downhearted = -2;
	var downside = -2;
	var drag = -1;
	var dragged = -1;
	var drags = -1;
	var drained = -2;
	var dread = -2;
	var dreaded = -2;
	var dreadful = -3;
	var dreading = -2;
	var dream = 1;
	var dreams = 1;
	var dreary = -2;
	var droopy = -2;
	var drop = -1;
	var dropped = -1;
	var drown = -2;
	var drowned = -2;
	var drowns = -2;
	var drudgery = -2;
	var drunk = -2;
	var dubious = -2;
	var dud = -2;
	var dull = -2;
	var dumb = -3;
	var dumbass = -3;
	var dump = -1;
	var dumped = -2;
	var dumps = -1;
	var dupe = -2;
	var duped = -2;
	var dupery = -2;
	var durable = 2;
	var dying = -3;
	var dysfunction = -2;
	var eager = 2;
	var earnest = 2;
	var ease = 2;
	var easy = 1;
	var ecstatic = 4;
	var eerie = -2;
	var eery = -2;
	var effective = 2;
	var effectively = 2;
	var effectiveness = 2;
	var effortlessly = 2;
	var elated = 3;
	var elation = 3;
	var elegant = 2;
	var elegantly = 2;
	var embarrass = -2;
	var embarrassed = -2;
	var embarrasses = -2;
	var embarrassing = -2;
	var embarrassment = -2;
	var embezzlement = -3;
	var embittered = -2;
	var embrace = 1;
	var emergency = -2;
	var empathetic = 2;
	var empower = 2;
	var empowerment = 2;
	var emptiness = -1;
	var empty = -1;
	var enchanted = 2;
	var encourage = 2;
	var encouraged = 2;
	var encouragement = 2;
	var encourages = 2;
	var encouraging = 2;
	var endorse = 2;
	var endorsed = 2;
	var endorsement = 2;
	var endorses = 2;
	var enemies = -2;
	var enemy = -2;
	var energetic = 2;
	var engage = 1;
	var engages = 1;
	var engrossed = 1;
	var engrossing = 3;
	var enjoy = 2;
	var enjoyable = 2;
	var enjoyed = 2;
	var enjoying = 2;
	var enjoys = 2;
	var enlighten = 2;
	var enlightened = 2;
	var enlightening = 2;
	var enlightens = 2;
	var ennui = -2;
	var enrage = -2;
	var enraged = -2;
	var enrages = -2;
	var enraging = -2;
	var enrapture = 3;
	var enslave = -2;
	var enslaved = -2;
	var enslaves = -2;
	var ensure = 1;
	var ensuring = 1;
	var enterprising = 1;
	var entertaining = 2;
	var enthral = 3;
	var enthusiastic = 3;
	var entitled = 1;
	var entrusted = 2;
	var envies = -1;
	var envious = -2;
	var envy = -1;
	var envying = -1;
	var erroneous = -2;
	var error = -2;
	var errors = -2;
	var escapes = -1;
	var escaping = -1;
	var esteem = 2;
	var esteemed = 2;
	var ethical = 2;
	var euphoria = 3;
	var euphoric = 4;
	var evacuate = -1;
	var evacuated = -1;
	var evacuates = -1;
	var evacuating = -1;
	var evacuation = -1;
	var evergreen = 2;
	var evergreens = 2;
	var evergreening = -3;
	var eviction = -1;
	var evil = -3;
	var exacerbate = -2;
	var exacerbated = -2;
	var exacerbates = -2;
	var exacerbating = -2;
	var exaggerate = -2;
	var exaggerated = -2;
	var exaggerates = -2;
	var exaggerating = -2;
	var exasparate = -2;
	var exasperated = -2;
	var exasperates = -2;
	var exasperating = -2;
	var excellence = 3;
	var excellent = 3;
	var excite = 3;
	var excited = 3;
	var excitement = 3;
	var exciting = 3;
	var exclude = -1;
	var excluded = -2;
	var exclusion = -1;
	var exclusive = 2;
	var excruciatingly = -1;
	var excuse = -1;
	var exempt = -1;
	var exhausted = -2;
	var exhilarated = 3;
	var exhilarates = 3;
	var exhilarating = 3;
	var exonerate = 2;
	var exonerated = 2;
	var exonerates = 2;
	var exonerating = 2;
	var expand = 1;
	var expands = 1;
	var expel = -2;
	var expelled = -2;
	var expelling = -2;
	var expels = -2;
	var expertly = 2;
	var exploit = -2;
	var exploited = -2;
	var exploiting = -2;
	var exploits = -2;
	var exploration = 1;
	var explorations = 1;
	var expose = -1;
	var exposed = -1;
	var exposes = -1;
	var exposing = -1;
	var exquisite = 3;
	var extend = 1;
	var extremist = -2;
	var extremists = -2;
	var exuberant = 4;
	var exultant = 3;
	var exultantly = 3;
	var fabulous = 4;
	var fabulously = 4;
	var fad = -2;
	var fag = -3;
	var faggot = -3;
	var faggots = -3;
	var fail = -2;
	var failed = -2;
	var failing = -2;
	var fails = -2;
	var failure = -2;
	var failures = -2;
	var fainthearted = -2;
	var fair = 2;
	var fairness = 2;
	var faith = 1;
	var faithful = 3;
	var fake = -3;
	var faker = -3;
	var fakes = -3;
	var faking = -3;
	var fallen = -2;
	var falling = -1;
	var falsely = -2;
	var falsified = -3;
	var falsify = -3;
	var fame = 1;
	var famine = -2;
	var famous = 2;
	var fan = 3;
	var fantastic = 4;
	var farce = -1;
	var fascinate = 3;
	var fascinated = 3;
	var fascinates = 3;
	var fascinating = 3;
	var fascination = 3;
	var fascist = -2;
	var fascists = -2;
	var fatal = -3;
	var fatalities = -3;
	var fatality = -3;
	var fatigue = -2;
	var fatigued = -2;
	var fatigues = -2;
	var fatiguing = -2;
	var favor = 2;
	var favorable = 2;
	var favorably = 2;
	var favored = 2;
	var favorite = 2;
	var favorited = 2;
	var favorites = 2;
	var favors = 2;
	var favour = 2;
	var favourable = 2;
	var favourably = 2;
	var favoured = 2;
	var favourite = 2;
	var favourited = 2;
	var favourites = 2;
	var favours = 2;
	var fear = -2;
	var fearful = -2;
	var fearfully = -2;
	var fearing = -2;
	var fearless = 2;
	var fearlessness = 2;
	var fearsome = -2;
	var feeble = -2;
	var feeling = 1;
	var felonies = -3;
	var felony = -3;
	var fertile = 2;
	var fervent = 2;
	var fervid = 2;
	var festive = 2;
	var fever = -2;
	var fiasco = -3;
	var fidgety = -2;
	var fight = -1;
	var fighting = -2;
	var fine = 2;
	var fines = -2;
	var finest = 3;
	var fire = -2;
	var fired = -2;
	var firing = -2;
	var fit = 1;
	var fitness = 1;
	var filth = -2;
	var filthy = -2;
	var flagship = 2;
	var flaw = -2;
	var flawed = -3;
	var flawless = 2;
	var flawlessly = 2;
	var flaws = -2;
	var flees = -1;
	var flop = -2;
	var flops = -2;
	var flu = -2;
	var flustered = -2;
	var focused = 2;
	var fond = 2;
	var fondness = 2;
	var fool = -2;
	var foolish = -2;
	var fools = -2;
	var forbid = -1;
	var forbidden = -2;
	var forbidding = -2;
	var forced = -1;
	var foreclosure = -2;
	var foreclosures = -2;
	var forefront = 1;
	var forget = -1;
	var forgetful = -2;
	var forgettable = -1;
	var forgive = 1;
	var forgiving = 1;
	var forgot = -1;
	var forgotten = -1;
	var fortune = 2;
	var fortunate = 2;
	var fortunately = 2;
	var foul = -3;
	var frantic = -1;
	var fraud = -4;
	var frauds = -4;
	var fraudster = -4;
	var fraudsters = -4;
	var fraudulence = -4;
	var fraudulent = -4;
	var freak = -2;
	var free = 1;
	var freedom = 2;
	var freedoms = 2;
	var frenzy = -3;
	var fresh = 1;
	var friend = 1;
	var friendliness = 2;
	var friendly = 2;
	var friendship = 2;
	var fright = -2;
	var frightened = -2;
	var frightening = -3;
	var frikin = -2;
	var frisky = 2;
	var frowning = -1;
	var fruitless = -2;
	var frustrate = -2;
	var frustrated = -2;
	var frustrates = -2;
	var frustrating = -2;
	var frustration = -2;
	var ftw = 3;
	var fuck = -4;
	var fucked = -4;
	var fucker = -4;
	var fuckers = -4;
	var fuckface = -4;
	var fuckhead = -4;
	var fuckin = -4;
	var fucking = -4;
	var fucktard = -4;
	var fud = -3;
	var fuked = -4;
	var fuking = -4;
	var fulfill = 2;
	var fulfilled = 2;
	var fulfillment = 2;
	var fulfills = 2;
	var fuming = -2;
	var fun = 4;
	var funeral = -1;
	var funerals = -1;
	var funky = 2;
	var funnier = 4;
	var funny = 4;
	var furious = -3;
	var futile = -2;
	var gag = -2;
	var gagged = -2;
	var gain = 2;
	var gained = 2;
	var gaining = 2;
	var gains = 2;
	var gallant = 3;
	var gallantly = 3;
	var gallantry = 3;
	var garbage = -1;
	var gem = 3;
	var generous = 2;
	var generously = 2;
	var genial = 3;
	var ghastly = -2;
	var ghost = -1;
	var giddy = -2;
	var gift = 2;
	var glad = 3;
	var glamorous = 3;
	var glamourous = 3;
	var glee = 3;
	var gleeful = 3;
	var gloom = -1;
	var gloomy = -2;
	var glorious = 2;
	var glory = 2;
	var glum = -2;
	var god = 1;
	var goddamn = -3;
	var godsend = 4;
	var gold = 2;
	var good = 3;
	var goodlooking = 3;
	var goodmorning = 1;
	var goodness = 3;
	var goodwill = 3;
	var goofiness = -2;
	var goofy = -2;
	var grace = 1;
	var graceful = 2;
	var gracious = 3;
	var grand = 3;
	var grant = 1;
	var granted = 1;
	var granting = 1;
	var grants = 1;
	var grateful = 3;
	var gratification = 2;
	var grave = -2;
	var gray = -1;
	var grisly = -2;
	var gr8 = 3;
	var great = 3;
	var greater = 3;
	var greatest = 3;
	var greed = -3;
	var greedy = -2;
	var greenwash = -3;
	var greenwasher = -3;
	var greenwashers = -3;
	var greenwashing = -3;
	var greet = 1;
	var greeted = 1;
	var greeting = 1;
	var greetings = 2;
	var greets = 1;
	var grey = -1;
	var grief = -2;
	var grieved = -2;
	var grim = -2;
	var gripping = 2;
	var groan = -2;
	var groaned = -2;
	var groaning = -2;
	var groans = -2;
	var gross = -2;
	var growing = 1;
	var growth = 2;
	var growths = 2;
	var gruesome = -3;
	var guarantee = 1;
	var guilt = -3;
	var guilty = -3;
	var gullibility = -2;
	var gullible = -2;
	var gun = -1;
	var ha = 2;
	var hacked = -1;
	var haha = 3;
	var hahaha = 3;
	var hahahah = 3;
	var hail = 2;
	var hailed = 2;
	var hallelujah = 3;
	var handpicked = 1;
	var handsome = 3;
	var hapless = -2;
	var haplessness = -2;
	var happiest = 3;
	var happiness = 3;
	var happy = 3;
	var harass = -3;
	var harassed = -3;
	var harasses = -3;
	var harassing = -3;
	var harassment = -3;
	var hard = -1;
	var hardier = 2;
	var hardship = -2;
	var hardy = 2;
	var harm = -2;
	var harmed = -2;
	var harmful = -2;
	var harming = -2;
	var harmony = 2;
	var harmonious = 2;
	var harmoniously = 2;
	var harms = -2;
	var harried = -2;
	var harsh = -2;
	var harsher = -2;
	var harshest = -2;
	var harshly = -2;
	var hate = -3;
	var hated = -3;
	var hater = -3;
	var haters = -3;
	var hates = -3;
	var hating = -3;
	var hatred = -3;
	var haunt = -1;
	var haunted = -2;
	var haunting = 1;
	var haunts = -1;
	var havoc = -2;
	var hazardous = -3;
	var headache = -2;
	var healthy = 2;
	var heartbreaking = -3;
	var heartbroken = -3;
	var heartfelt = 3;
	var heartless = -2;
	var heartwarming = 3;
	var heaven = 2;
	var heavenly = 4;
	var heavyhearted = -2;
	var hehe = 2;
	var hell = -4;
	var hellish = -2;
	var help = 2;
	var helpful = 2;
	var helping = 2;
	var helpless = -2;
	var helps = 2;
	var hero = 2;
	var heroes = 2;
	var heroic = 3;
	var hesitant = -2;
	var hesitate = -2;
	var hid = -1;
	var hide = -1;
	var hideous = -3;
	var hides = -1;
	var hiding = -1;
	var highlight = 2;
	var hilarious = 2;
	var hinder = -2;
	var hindrance = -2;
	var hoax = -2;
	var hollow = -1;
	var homeless = -2;
	var homesick = -2;
	var homicide = -2;
	var homicides = -2;
	var honest = 2;
	var honor = 2;
	var honored = 2;
	var honoring = 2;
	var honour = 2;
	var honoured = 2;
	var honouring = 2;
	var hooligan = -2;
	var hooliganism = -2;
	var hooligans = -2;
	var hope = 2;
	var hopeful = 2;
	var hopefully = 2;
	var hopeless = -2;
	var hopelessness = -2;
	var hopes = 2;
	var hoping = 2;
	var horrendous = -3;
	var horrid = -3;
	var horrible = -3;
	var horrific = -3;
	var horrified = -3;
	var hospitalized = -2;
	var hostile = -2;
	var huckster = -2;
	var hug = 2;
	var huge = 1;
	var hugs = 2;
	var humane = 2;
	var humble = 1;
	var humbug = -2;
	var humerous = 3;
	var humiliated = -3;
	var humiliation = -3;
	var humor = 2;
	var humorous = 2;
	var humour = 2;
	var humourous = 2;
	var hunger = -2;
	var hurrah = 5;
	var hurt = -2;
	var hurting = -2;
	var hurts = -2;
	var hypocritical = -2;
	var hysteria = -3;
	var hysterical = -3;
	var hysterics = -3;
	var icky = -3;
	var idiocy = -3;
	var idiot = -3;
	var idiotic = -3;
	var ignorance = -2;
	var ignorant = -2;
	var ignore = -1;
	var ignored = -2;
	var ignores = -1;
	var ill = -2;
	var illegal = -3;
	var illegally = -3;
	var illegitimate = -3;
	var illiteracy = -2;
	var illness = -2;
	var illnesses = -2;
	var illogical = -2;
	var imaginative = 2;
	var imbecile = -3;
	var immobilized = -1;
	var immortal = 2;
	var immune = 1;
	var impair = -2;
	var impaired = -2;
	var impairing = -2;
	var impairment = -2;
	var impairs = -2;
	var impatient = -2;
	var impeachment = -3;
	var impeachments = -3;
	var impede = -2;
	var impeded = -2;
	var impedes = -2;
	var impeding = -2;
	var impedingly = -2;
	var imperfect = -2;
	var importance = 2;
	var important = 2;
	var impose = -1;
	var imposed = -1;
	var imposes = -1;
	var imposing = -1;
	var imposter = -2;
	var impotent = -2;
	var impress = 3;
	var impressed = 3;
	var impresses = 3;
	var impressive = 3;
	var imprisoned = -2;
	var imprisonment = -2;
	var improper = -2;
	var improperly = -2;
	var improve = 2;
	var improved = 2;
	var improvement = 2;
	var improves = 2;
	var improving = 2;
	var inability = -2;
	var inaction = -2;
	var inadequate = -2;
	var inadvertently = -2;
	var inappropriate = -2;
	var incapable = -2;
	var incapacitated = -2;
	var incapacitates = -2;
	var incapacitating = -2;
	var incense = -2;
	var incensed = -2;
	var incenses = -2;
	var incensing = -2;
	var incoherent = -2;
	var incompetence = -2;
	var incompetent = -2;
	var incomplete = -1;
	var incomprehensible = -2;
	var inconsiderate = -2;
	var inconvenience = -2;
	var inconvenient = -2;
	var increase = 1;
	var increased = 1;
	var indecisive = -2;
	var indestructible = 2;
	var indicted = -2;
	var indifference = -2;
	var indifferent = -2;
	var indignant = -2;
	var indignation = -2;
	var indoctrinate = -2;
	var indoctrinated = -2;
	var indoctrinates = -2;
	var indoctrinating = -2;
	var inediable = -2;
	var inexorable = -3;
	var inexcusable = -3;
	var ineffective = -2;
	var ineffectively = -2;
	var ineffectual = -2;
	var inefficiency = -2;
	var inefficient = -2;
	var inefficiently = -2;
	var inept = -2;
	var ineptitude = -2;
	var infantile = -2;
	var infantilized = -2;
	var infatuated = 2;
	var infatuation = 2;
	var infect = -2;
	var infected = -2;
	var infecting = -2;
	var infection = -2;
	var infections = -2;
	var infectious = -2;
	var infects = -2;
	var inferior = -2;
	var infest = -2;
	var infested = -2;
	var infesting = -2;
	var infests = -2;
	var inflamed = -2;
	var inflict = -2;
	var inflicted = -2;
	var inflicting = -2;
	var inflicts = -2;
	var influential = 2;
	var infract = -2;
	var infracted = -2;
	var infracting = -2;
	var infracts = -2;
	var infringement = -2;
	var infuriate = -2;
	var infuriated = -2;
	var infuriates = -2;
	var infuriating = -2;
	var inhibit = -1;
	var inhuman = -2;
	var injured = -2;
	var injuries = -2;
	var injury = -2;
	var injustice = -2;
	var innovate = 1;
	var innovates = 1;
	var innovation = 1;
	var innovative = 2;
	var inoperative = -2;
	var inquisition = -2;
	var inquisitive = 2;
	var insane = -2;
	var insanity = -2;
	var insecure = -2;
	var insensitive = -2;
	var insensitivity = -2;
	var insignificant = -2;
	var insipid = -2;
	var insolvent = -2;
	var insomnia = -2;
	var inspiration = 2;
	var inspirational = 2;
	var inspire = 2;
	var inspired = 2;
	var inspires = 2;
	var inspiring = 3;
	var insufficiency = -2;
	var insufficient = -2;
	var insufficiently = -2;
	var insult = -2;
	var insulted = -2;
	var insulting = -2;
	var insults = -2;
	var intact = 2;
	var integrity = 2;
	var intelligent = 2;
	var intense = 1;
	var interest = 1;
	var interested = 2;
	var interesting = 2;
	var interests = 1;
	var interrogated = -2;
	var interrupt = -2;
	var interrupted = -2;
	var interrupting = -2;
	var interruption = -2;
	var interrupts = -2;
	var intimacy = 2;
	var intimidate = -2;
	var intimidated = -2;
	var intimidates = -2;
	var intimidating = -2;
	var intimidation = -2;
	var intransigence = -2;
	var intransigency = -2;
	var intricate = 2;
	var intrigues = 1;
	var invasion = -1;
	var invincible = 2;
	var invite = 1;
	var inviting = 1;
	var invulnerable = 2;
	var irate = -3;
	var ironic = -1;
	var irony = -1;
	var irrational = -1;
	var irreparable = -2;
	var irreproducible = -2;
	var irresistible = 2;
	var irresistibly = 2;
	var irresolute = -2;
	var irresponsible = -2;
	var irresponsibly = -2;
	var irreversible = -1;
	var irreversibly = -1;
	var irritate = -3;
	var irritated = -3;
	var irritates = -3;
	var irritating = -3;
	var isolated = -1;
	var itchy = -2;
	var jackass = -4;
	var jackasses = -4;
	var jailed = -2;
	var jaunty = 2;
	var jealous = -2;
	var jealousy = -2;
	var jeopardy = -2;
	var jerk = -3;
	var jesus = 1;
	var jewel = 1;
	var jewels = 1;
	var jocular = 2;
	var join = 1;
	var joke = 2;
	var jokes = 2;
	var jolly = 2;
	var jovial = 2;
	var joy = 3;
	var joyful = 3;
	var joyfully = 3;
	var joyless = -2;
	var joyous = 3;
	var jubilant = 3;
	var jumpy = -1;
	var justice = 2;
	var justifiably = 2;
	var justified = 2;
	var keen = 1;
	var kickback = -3;
	var kickbacks = -3;
	var kidnap = -2;
	var kidnapped = -2;
	var kidnapping = -2;
	var kidnappings = -2;
	var kidnaps = -2;
	var kill = -3;
	var killed = -3;
	var killing = -3;
	var kills = -3;
	var kind = 2;
	var kinder = 2;
	var kindness = 2;
	var kiss = 2;
	var kudos = 3;
	var lack = -2;
	var lackadaisical = -2;
	var lag = -1;
	var lagged = -2;
	var lagging = -2;
	var lags = -2;
	var lame = -2;
	var landmark = 2;
	var lapse = -1;
	var lapsed = -1;
	var laugh = 1;
	var laughed = 1;
	var laughing = 1;
	var laughs = 1;
	var laughting = 1;
	var launched = 1;
	var lawl = 3;
	var lawsuit = -2;
	var lawsuits = -2;
	var lazy = -1;
	var leadership = 1;
	var leading = 2;
	var leak = -1;
	var leaked = -1;
	var leave = -1;
	var legal = 1;
	var legally = 1;
	var lenient = 1;
	var lethal = -2;
	var lethality = -2;
	var lethargic = -2;
	var lethargy = -2;
	var liar = -3;
	var liars = -3;
	var libelous = -2;
	var lied = -2;
	var lifeless = -1;
	var lifesaver = 4;
	var lighthearted = 1;
	var likable = 2;
	var like = 2;
	var likeable = 2;
	var liked = 2;
	var likers = 2;
	var likes = 2;
	var liking = 2;
	var limitation = -1;
	var limited = -1;
	var limits = -1;
	var litigation = -1;
	var litigious = -2;
	var lively = 2;
	var livid = -2;
	var lmao = 4;
	var lmfao = 4;
	var loathe = -3;
	var loathed = -3;
	var loathes = -3;
	var loathing = -3;
	var loathsome = -3;
	var lobbied = -2;
	var lobby = -2;
	var lobbying = -2;
	var lobbyist = -2;
	var lobbyists = -2;
	var lol = 3;
	var lolol = 4;
	var lololol = 4;
	var lolololol = 4;
	var lonely = -2;
	var lonesome = -2;
	var longing = -1;
	var lool = 3;
	var loom = -1;
	var loomed = -1;
	var looming = -1;
	var looms = -1;
	var loool = 3;
	var looool = 3;
	var loose = -3;
	var looses = -3;
	var loser = -3;
	var losing = -3;
	var loss = -3;
	var losses = -3;
	var lost = -3;
	var lousy = -2;
	var lovable = 3;
	var love = 3;
	var loved = 3;
	var lovelies = 3;
	var lovely = 3;
	var loves = 3;
	var loving = 2;
	var lowest = -1;
	var loyal = 3;
	var loyalty = 3;
	var luck = 3;
	var luckily = 3;
	var lucky = 3;
	var lucrative = 3;
	var ludicrous = -3;
	var lugubrious = -2;
	var lunatic = -3;
	var lunatics = -3;
	var lurk = -1;
	var lurking = -1;
	var lurks = -1;
	var luxury = 2;
	var macabre = -2;
	var mad = -3;
	var maddening = -3;
	var madly = -3;
	var madness = -3;
	var magnificent = 3;
	var maladaption = -2;
	var maldevelopment = -2;
	var maltreatment = -2;
	var mandatory = -1;
	var manipulated = -1;
	var manipulating = -1;
	var manipulation = -1;
	var manslaughter = -3;
	var marvel = 3;
	var marvelous = 3;
	var marvels = 3;
	var masterpiece = 4;
	var masterpieces = 4;
	var matter = 1;
	var matters = 1;
	var mature = 2;
	var meaningful = 2;
	var meaningless = -2;
	var medal = 3;
	var mediocrity = -3;
	var meditative = 1;
	var melancholy = -2;
	var memorable = 1;
	var memoriam = -2;
	var menace = -2;
	var menaced = -2;
	var menaces = -2;
	var mercy = 2;
	var merry = 3;
	var mesmerizing = 3;
	var mess = -2;
	var messed = -2;
	var methodical = 2;
	var methodically = 2;
	var mindless = -2;
	var miracle = 4;
	var mirth = 3;
	var mirthful = 3;
	var mirthfully = 3;
	var misbehave = -2;
	var misbehaved = -2;
	var misbehaves = -2;
	var misbehaving = -2;
	var misbranding = -3;
	var miscast = -2;
	var mischief = -1;
	var mischiefs = -1;
	var misclassified = -2;
	var misclassifies = -2;
	var misclassify = -2;
	var misconduct = -2;
	var misconducted = -2;
	var misconducting = -2;
	var misconducts = -2;
	var miserable = -3;
	var miserably = -3;
	var misery = -2;
	var misfire = -2;
	var misfortune = -2;
	var misgiving = -2;
	var misinformation = -2;
	var misinformed = -2;
	var misinterpreted = -2;
	var mislead = -3;
	var misleaded = -3;
	var misleading = -3;
	var misleads = -3;
	var misplace = -2;
	var misplaced = -2;
	var misplaces = -2;
	var misplacing = -2;
	var mispricing = -3;
	var misread = -1;
	var misreport = -2;
	var misreported = -2;
	var misreporting = -2;
	var misreports = -2;
	var misrepresent = -2;
	var misrepresentation = -2;
	var misrepresentations = -2;
	var misrepresented = -2;
	var misrepresenting = -2;
	var misrepresents = -2;
	var miss = -2;
	var missed = -2;
	var missing = -2;
	var mistake = -2;
	var mistaken = -2;
	var mistakes = -2;
	var mistaking = -2;
	var misunderstand = -2;
	var misunderstanding = -2;
	var misunderstands = -2;
	var misunderstood = -2;
	var misuse = -2;
	var misused = -2;
	var misuses = -2;
	var misusing = -2;
	var moan = -2;
	var moaned = -2;
	var moaning = -2;
	var moans = -2;
	var mock = -2;
	var mocked = -2;
	var mocking = -2;
	var mocks = -2;
	var modernize = 2;
	var modernized = 2;
	var modernizes = 2;
	var modernizing = 2;
	var mongering = -2;
	var monopolize = -2;
	var monopolized = -2;
	var monopolizes = -2;
	var monopolizing = -2;
	var monotone = -1;
	var moody = -1;
	var mope = -1;
	var moping = -1;
	var moron = -3;
	var motherfucker = -5;
	var motherfucking = -5;
	var motivate = 1;
	var motivated = 2;
	var motivating = 2;
	var motivation = 1;
	var mourn = -2;
	var mourned = -2;
	var mournful = -2;
	var mourning = -2;
	var mourns = -2;
	var muddy = -2;
	var mumpish = -2;
	var murder = -2;
	var murderer = -2;
	var murdering = -3;
	var murderous = -3;
	var murders = -2;
	var murky = -2;
	var myth = -1;
	var n00b = -2;
	var naive = -2;
	var narcissism = -2;
	var nasty = -3;
	var natural = 1;
	var needy = -2;
	var negative = -2;
	var negativity = -2;
	var neglect = -2;
	var neglected = -2;
	var neglecting = -2;
	var neglects = -2;
	var nerves = -1;
	var nervous = -2;
	var nervously = -2;
	var nice = 3;
	var nifty = 2;
	var niggas = -5;
	var nigger = -5;
	var no = -1;
	var noble = 2;
	var noblest = 2;
	var noisy = -1;
	var nonsense = -2;
	var noob = -2;
	var nosey = -2;
	var notable = 2;
	var noticeable = 2;
	var notorious = -2;
	var novel = 2;
	var numb = -1;
	var nurturing = 2;
	var nuts = -3;
	var obliterate = -2;
	var obliterated = -2;
	var obnoxious = -3;
	var obscene = -2;
	var obscenity = -2;
	var obsessed = 2;
	var obsolete = -2;
	var obstacle = -2;
	var obstacles = -2;
	var obstinate = -2;
	var obstruct = -2;
	var obstructed = -2;
	var obstructing = -2;
	var obstruction = -2;
	var obstructs = -2;
	var odd = -2;
	var offence = -2;
	var offences = -2;
	var offend = -2;
	var offended = -2;
	var offender = -2;
	var offending = -2;
	var offends = -2;
	var offense = -2;
	var offenses = -2;
	var offensive = -2;
	var offensively = -2;
	var offline = -1;
	var oks = 2;
	var ominous = 3;
	var oops = -2;
	var opportunities = 2;
	var opportunity = 2;
	var oppressed = -2;
	var oppression = -2;
	var oppressions = -2;
	var oppressive = -2;
	var optimism = 2;
	var optimistic = 2;
	var optionless = -2;
	var ostracize = -2;
	var ostracized = -2;
	var ostracizes = -2;
	var ouch = -2;
	var outage = -2;
	var outages = -2;
	var outbreak = -2;
	var outbreaks = -2;
	var outcry = -2;
	var outmaneuvered = -2;
	var outnumbered = -2;
	var outrage = -3;
	var outraged = -3;
	var outrageous = -3;
	var outreach = 2;
	var outstanding = 5;
	var overjoyed = 4;
	var overload = -1;
	var overlooked = -1;
	var overprotective = -2;
	var overran = -2;
	var overreact = -2;
	var overreacted = -2;
	var overreacting = -2;
	var overreaction = -2;
	var overreacts = -2;
	var oversell = -2;
	var overselling = -2;
	var oversells = -2;
	var oversight = -1;
	var oversimplification = -2;
	var oversimplified = -2;
	var oversimplifies = -2;
	var oversimplify = -2;
	var oversold = -2;
	var overstatement = -2;
	var overstatements = -2;
	var overweight = -1;
	var overwrought = -3;
	var oxymoron = -1;
	var pain = -2;
	var pained = -2;
	var painful = -2;
	var panic = -3;
	var panicked = -3;
	var panics = -3;
	var paradise = 3;
	var paradox = -1;
	var pardon = 2;
	var pardoned = 2;
	var pardoning = 2;
	var pardons = 2;
	var parley = -1;
	var passion = 1;
	var passionate = 2;
	var passive = -1;
	var passively = -1;
	var pathetic = -2;
	var pay = -1;
	var peace = 2;
	var peaceful = 2;
	var peacefully = 2;
	var penalize = -2;
	var penalized = -2;
	var penalizes = -2;
	var penalizing = -2;
	var penalty = -2;
	var pensive = -1;
	var perfect = 3;
	var perfected = 2;
	var perfection = 3;
	var perfectly = 3;
	var perfects = 2;
	var peril = -2;
	var perjury = -3;
	var perpetrated = -2;
	var perpetrator = -2;
	var perpetrators = -2;
	var perplexed = -2;
	var persecute = -2;
	var persecuted = -2;
	var persecutes = -2;
	var persecuting = -2;
	var perturbed = -2;
	var pervert = -3;
	var pesky = -2;
	var pessimism = -2;
	var pessimistic = -2;
	var petrified = -2;
	var philanthropy = 2;
	var phobic = -2;
	var picturesque = 2;
	var pileup = -1;
	var pillage = -2;
	var pique = -2;
	var piqued = -2;
	var piss = -4;
	var pissed = -4;
	var pissing = -3;
	var piteous = -2;
	var pitied = -1;
	var pity = -2;
	var plague = -3;
	var plagued = -3;
	var plagues = -3;
	var plaguing = -3;
	var playful = 2;
	var pleasant = 3;
	var please = 1;
	var pleased = 3;
	var pleasurable = 3;
	var pleasure = 3;
	var plodding = -2;
	var poignant = 2;
	var pointless = -2;
	var poised = -2;
	var poison = -2;
	var poisoned = -2;
	var poisons = -2;
	var polished = 2;
	var polite = 2;
	var politeness = 2;
	var pollutant = -2;
	var pollute = -2;
	var polluted = -2;
	var polluter = -2;
	var polluters = -2;
	var pollutes = -2;
	var pollution = -2;
	var poor = -2;
	var poorer = -2;
	var poorest = -2;
	var poorly = -2;
	var popular = 3;
	var popularity = 3;
	var positive = 2;
	var positively = 2;
	var possessive = -2;
	var postpone = -1;
	var postponed = -1;
	var postpones = -1;
	var postponing = -1;
	var poverty = -1;
	var powerful = 2;
	var powerless = -2;
	var praise = 3;
	var praised = 3;
	var praises = 3;
	var praising = 3;
	var pray = 1;
	var praying = 1;
	var prays = 1;
	var prblm = -2;
	var prblms = -2;
	var predatory = -2;
	var prepared = 1;
	var pressure = -1;
	var pressured = -2;
	var pretend = -1;
	var pretending = -1;
	var pretends = -1;
	var pretty = 1;
	var prevent = -1;
	var prevented = -1;
	var preventing = -1;
	var prevents = -1;
	var prick = -5;
	var prison = -2;
	var prisoner = -2;
	var prisoners = -2;
	var privileged = 2;
	var proactive = 2;
	var problem = -2;
	var problems = -2;
	var profit = 2;
	var profitable = 2;
	var profiteer = -2;
	var profits = 2;
	var progress = 2;
	var prohibit = -1;
	var prohibits = -1;
	var prominent = 2;
	var promise = 1;
	var promised = 1;
	var promises = 1;
	var promote = 1;
	var promoted = 1;
	var promotes = 1;
	var promoting = 1;
	var promptly = 1;
	var propaganda = -2;
	var prosecute = -1;
	var prosecuted = -2;
	var prosecutes = -1;
	var prosecution = -1;
	var prospect = 1;
	var prospects = 1;
	var prosperity = 3;
	var prosperous = 3;
	var protect = 1;
	var protects = 1;
	var protest = -2;
	var protesters = -2;
	var protesting = -2;
	var protests = -2;
	var proud = 2;
	var proudly = 2;
	var provoke = -1;
	var provoked = -1;
	var provokes = -1;
	var provoking = -1;
	var prudence = 2;
	var pseudoscience = -3;
	var psychopathic = -2;
	var punish = -2;
	var punished = -2;
	var punishes = -2;
	var punishing = -2;
	var punitive = -2;
	var pure = 1;
	var purest = 1;
	var purposeful = 2;
	var pushy = -1;
	var puzzled = -2;
	var quaking = -2;
	var qualities = 2;
	var quality = 2;
	var questionable = -2;
	var questioned = -1;
	var questioning = -1;
	var racism = -3;
	var racist = -3;
	var racists = -3;
	var rage = -2;
	var rageful = -2;
	var rainy = -1;
	var rant = -3;
	var ranter = -3;
	var ranters = -3;
	var rants = -3;
	var rape = -4;
	var raped = -4;
	var rapist = -4;
	var rapture = 2;
	var raptured = 2;
	var raptures = 2;
	var rapturous = 4;
	var rash = -2;
	var ratified = 2;
	var reach = 1;
	var reached = 1;
	var reaches = 1;
	var reaching = 1;
	var reassure = 1;
	var reassured = 1;
	var reassures = 1;
	var reassuring = 2;
	var rebel = -2;
	var rebellion = -2;
	var rebels = -2;
	var recession = -2;
	var reckless = -2;
	var recognition = 2;
	var recommend = 2;
	var recommended = 2;
	var recommends = 2;
	var redeemed = 2;
	var refine = 1;
	var refined = 1;
	var refines = 1;
	var refreshingly = 2;
	var refuse = -2;
	var refused = -2;
	var refuses = -2;
	var refusing = -2;
	var regret = -2;
	var regretful = -2;
	var regrets = -2;
	var regretted = -2;
	var regretting = -2;
	var reigning = 1;
	var reject = -1;
	var rejected = -1;
	var rejecting = -1;
	var rejection = -2;
	var rejects = -1;
	var rejoice = 4;
	var rejoiced = 4;
	var rejoices = 4;
	var rejoicing = 4;
	var relaxed = 2;
	var relentless = -1;
	var reliability = 2;
	var reliable = 2;
	var reliably = 2;
	var reliant = 2;
	var relieve = 1;
	var relieved = 2;
	var relieves = 1;
	var relieving = 2;
	var relishing = 2;
	var remarkable = 2;
	var remorse = -2;
	var repellent = -2;
	var repercussion = -2;
	var repercussions = -2;
	var reprimand = -2;
	var reprimanded = -2;
	var reprimanding = -2;
	var reprimands = -2;
	var repulse = -1;
	var repulsed = -2;
	var repulsive = -2;
	var rescue = 2;
	var rescued = 2;
	var rescues = 2;
	var resentful = -2;
	var resign = -1;
	var resigned = -1;
	var resigning = -1;
	var resigns = -1;
	var resolute = 2;
	var resolution = 2;
	var resolve = 2;
	var resolved = 2;
	var resolves = 2;
	var resolving = 2;
	var respect = 2;
	var respected = 2;
	var respects = 2;
	var responsibility = 1;
	var responsible = 2;
	var responsive = 2;
	var restful = 2;
	var restless = -2;
	var restore = 1;
	var restored = 1;
	var restores = 1;
	var restoring = 1;
	var restrict = -2;
	var restricted = -2;
	var restricting = -2;
	var restriction = -2;
	var restrictive = -1;
	var restricts = -2;
	var retained = -1;
	var retard = -2;
	var retarded = -2;
	var retreat = -1;
	var revenge = -2;
	var revengeful = -2;
	var revered = 2;
	var revive = 2;
	var revives = 2;
	var revolting = -2;
	var reward = 2;
	var rewarded = 2;
	var rewarding = 2;
	var rewards = 2;
	var rich = 2;
	var richly = 2;
	var ridiculous = -3;
	var rig = -1;
	var rigged = -1;
	var righteousness = 2;
	var rightful = 2;
	var rightfully = 2;
	var rigorous = 3;
	var rigorously = 3;
	var riot = -2;
	var riots = -2;
	var rise = 1;
	var rises = 1;
	var risk = -2;
	var risks = -2;
	var risky = -2;
	var riveting = 3;
	var rob = -2;
	var robber = -2;
	var robed = -2;
	var robing = -2;
	var robs = -2;
	var robust = 2;
	var rofl = 4;
	var roflcopter = 4;
	var roflmao = 4;
	var romance = 2;
	var romantical = 2;
	var romantically = 2;
	var rose = 1;
	var rotfl = 4;
	var rotflmfao = 4;
	var rotflol = 4;
	var rotten = -3;
	var rude = -2;
	var ruin = -2;
	var ruined = -2;
	var ruining = -2;
	var ruins = -2;
	var sabotage = -2;
	var sad = -2;
	var sadden = -2;
	var saddened = -2;
	var sadly = -2;
	var safe = 1;
	var safely = 1;
	var safer = 2;
	var safety = 1;
	var salient = 1;
	var salute = 2;
	var saluted = 2;
	var salutes = 2;
	var saluting = 2;
	var salvation = 2;
	var sappy = -1;
	var sarcastic = -2;
	var satisfied = 2;
	var savange = -2;
	var savanges = -2;
	var save = 2;
	var saved = 2;
	var savings = 1;
	var scam = -2;
	var scams = -2;
	var scandal = -3;
	var scandalous = -3;
	var scandals = -3;
	var scapegoat = -2;
	var scapegoats = -2;
	var scare = -2;
	var scared = -2;
	var scar = -2;
	var scars = -2;
	var scary = -2;
	var sceptical = -2;
	var scold = -2;
	var scoop = 3;
	var scorn = -2;
	var scornful = -2;
	var scream = -2;
	var screamed = -2;
	var screaming = -2;
	var screams = -2;
	var screwed = -2;
	var scum = -3;
	var scumbag = -4;
	var seamless = 2;
	var seamlessly = 2;
	var secure = 2;
	var secured = 2;
	var secures = 2;
	var sedition = -2;
	var seditious = -2;
	var seduced = -1;
	var selfish = -3;
	var selfishness = -3;
	var sentence = -2;
	var sentenced = -2;
	var sentences = -2;
	var sentencing = -2;
	var serene = 2;
	var settlement = 1;
	var settlements = 1;
	var severe = -2;
	var severely = -2;
	var sexist = -2;
	var sexistic = -2;
	var sexy = 3;
	var shaky = -2;
	var shame = -2;
	var shamed = -2;
	var shameful = -2;
	var share = 1;
	var shared = 1;
	var shares = 1;
	var shattered = -2;
	var shit = -4;
	var shithead = -4;
	var shitty = -3;
	var shock = -2;
	var shocked = -2;
	var shocking = -2;
	var shocks = -2;
	var shoody = -2;
	var shoot = -1;
	var shortage = -2;
	var shortages = -2;
	var shrew = -4;
	var shy = -1;
	var sick = -2;
	var sickness = -2;
	var sigh = -2;
	var significance = 1;
	var significant = 1;
	var silencing = -1;
	var silly = -1;
	var simplicity = 1;
	var sin = -2;
	var sincere = 2;
	var sincerely = 2;
	var sincerest = 2;
	var sincerity = 2;
	var sinful = -3;
	var singleminded = -2;
	var sinister = -2;
	var sins = -2;
	var skeptic = -2;
	var skeptical = -2;
	var skepticism = -2;
	var skeptics = -2;
	var slam = -2;
	var slash = -2;
	var slashed = -2;
	var slashes = -2;
	var slashing = -2;
	var slave = -3;
	var slavery = -3;
	var slaves = -3;
	var sleeplessness = -2;
	var slick = 2;
	var slicker = 2;
	var slickest = 2;
	var slip = -1;
	var sloppy = -2;
	var sluggish = -2;
	var slumping = -1;
	var slut = -5;
	var smart = 1;
	var smarter = 2;
	var smartest = 2;
	var smear = -2;
	var smile = 2;
	var smiled = 2;
	var smiles = 2;
	var smiling = 2;
	var smog = -2;
	var smuggle = -2;
	var smuggled = -2;
	var smuggling = -2;
	var smuggles = -2;
	var sneaky = -1;
	var sneeze = -2;
	var sneezed = -2;
	var sneezes = -2;
	var sneezing = -2;
	var snub = -2;
	var snubbed = -2;
	var snubbing = -2;
	var snubs = -2;
	var sobering = 1;
	var solemn = -1;
	var solid = 2;
	var solidarity = 2;
	var solidified = 2;
	var solidifies = 2;
	var solidify = 2;
	var solidifying = 2;
	var solution = 1;
	var solutions = 1;
	var solve = 1;
	var solved = 1;
	var solves = 1;
	var solving = 1;
	var somber = -2;
	var soothe = 3;
	var soothed = 3;
	var soothing = 3;
	var sophisticated = 2;
	var sore = -1;
	var sorrow = -2;
	var sorrowful = -2;
	var sorry = -1;
	var spacious = 1;
	var spam = -2;
	var spammer = -3;
	var spammers = -3;
	var spamming = -2;
	var spark = 1;
	var sparkle = 3;
	var sparkles = 3;
	var sparkling = 3;
	var spearhead = 2;
	var speculative = -2;
	var spirit = 1;
	var spirited = 2;
	var spiritless = -2;
	var spiteful = -2;
	var splendid = 3;
	var spoiled = -2;
	var spoilt = -2;
	var spotless = 2;
	var sprightly = 2;
	var squander = -2;
	var squandered = -2;
	var squandering = -2;
	var squanders = -2;
	var squelched = -1;
	var stab = -2;
	var stabbed = -2;
	var stable = 2;
	var stabs = -2;
	var stall = -2;
	var stalled = -2;
	var stalling = -2;
	var stamina = 2;
	var stampede = -2;
	var stank = -2;
	var startled = -2;
	var startling = 3;
	var starve = -2;
	var starved = -2;
	var starves = -2;
	var starving = -2;
	var steadfast = 2;
	var steal = -2;
	var stealing = -2;
	var steals = -2;
	var stereotype = -2;
	var stereotyped = -2;
	var stifled = -1;
	var stimulate = 1;
	var stimulated = 1;
	var stimulates = 1;
	var stimulating = 2;
	var stingy = -2;
	var stink = -2;
	var stinked = -2;
	var stinker = -2;
	var stinking = -2;
	var stinks = -2;
	var stinky = -2;
	var stole = -2;
	var stolen = -2;
	var stop = -1;
	var stopped = -1;
	var stopping = -1;
	var stops = -1;
	var stout = 2;
	var straight = 1;
	var strange = -1;
	var strangely = -1;
	var strangled = -2;
	var strength = 2;
	var strengthen = 2;
	var strengthened = 2;
	var strengthening = 2;
	var strengthens = 2;
	var strengths = 2;
	var stress = -1;
	var stressed = -2;
	var stressor = -2;
	var stressors = -2;
	var stricken = -2;
	var strike = -1;
	var strikers = -2;
	var strikes = -1;
	var strong = 2;
	var stronger = 2;
	var strongest = 2;
	var struck = -1;
	var struggle = -2;
	var struggled = -2;
	var struggles = -2;
	var struggling = -2;
	var stubborn = -2;
	var stuck = -2;
	var stunned = -2;
	var stunning = 4;
	var stupid = -2;
	var stupidity = -3;
	var stupidly = -2;
	var suave = 2;
	var subpoena = -2;
	var substantial = 1;
	var substantially = 1;
	var subversive = -2;
	var succeed = 3;
	var succeeded = 3;
	var succeeding = 3;
	var succeeds = 3;
	var success = 2;
	var successful = 3;
	var successfully = 3;
	var suck = -3;
	var sucks = -3;
	var sue = -2;
	var sued = -2;
	var sueing = -2;
	var sues = -2;
	var suffer = -2;
	var suffered = -2;
	var sufferer = -2;
	var sufferers = -2;
	var suffering = -2;
	var suffers = -2;
	var suicidal = -2;
	var suicide = -2;
	var suicides = -2;
	var suing = -2;
	var suitable = 2;
	var suited = 2;
	var sulking = -2;
	var sulky = -2;
	var sullen = -2;
	var sunshine = 2;
	var superb = 5;
	var superior = 2;
	var support = 2;
	var supported = 2;
	var supporter = 1;
	var supporters = 1;
	var supporting = 1;
	var supportive = 2;
	var supports = 2;
	var supreme = 4;
	var survived = 2;
	var surviving = 2;
	var survivor = 2;
	var suspect = -1;
	var suspected = -1;
	var suspecting = -1;
	var suspects = -1;
	var suspend = -1;
	var suspended = -1;
	var suspicious = -2;
	var sustainability = 1;
	var sustainable = 2;
	var sustainably = 2;
	var swear = -2;
	var swearing = -2;
	var swears = -2;
	var sweet = 2;
	var sweeter = 3;
	var sweetest = 3;
	var swift = 2;
	var swiftly = 2;
	var swindle = -3;
	var swindles = -3;
	var swindling = -3;
	var sympathetic = 2;
	var sympathy = 2;
	var taint = -2;
	var tainted = -2;
	var talent = 2;
	var tard = -2;
	var tarnish = -2;
	var tarnished = -2;
	var tarnishes = -2;
	var tears = -2;
	var tender = 2;
	var tenderness = 2;
	var tense = -2;
	var tension = -1;
	var terrible = -3;
	var terribly = -3;
	var terrific = 4;
	var terrifically = 4;
	var terrified = -3;
	var terror = -3;
	var terrorist = -2;
	var terrorists = -2;
	var terrorize = -3;
	var terrorized = -3;
	var terrorizes = -3;
	var thank = 2;
	var thankful = 2;
	var thanks = 2;
	var thorny = -2;
	var thoughtful = 2;
	var thoughtless = -2;
	var threat = -2;
	var threaten = -2;
	var threatened = -2;
	var threatening = -2;
	var threatens = -2;
	var threats = -2;
	var thrilled = 5;
	var thwart = -2;
	var thwarted = -2;
	var thwarting = -2;
	var thwarts = -2;
	var timid = -2;
	var timorous = -2;
	var tired = -2;
	var tits = -2;
	var tolerance = 2;
	var tolerant = 2;
	var toothless = -2;
	var top = 2;
	var tops = 2;
	var torn = -2;
	var torture = -4;
	var tortured = -4;
	var tortures = -4;
	var torturing = -4;
	var totalitarian = -2;
	var totalitarianism = -2;
	var tout = -2;
	var touted = -2;
	var touting = -2;
	var touts = -2;
	var toxic = -3;
	var tragedies = -2;
	var tragedy = -2;
	var tragic = -2;
	var tranquil = 2;
	var transgress = -2;
	var transgressed = -2;
	var transgresses = -2;
	var transgressing = -2;
	var trap = -1;
	var trapped = -2;
	var traps = -1;
	var trauma = -3;
	var traumatic = -3;
	var travesty = -2;
	var treason = -3;
	var treasonous = -3;
	var treasure = 2;
	var treasures = 2;
	var trembling = -2;
	var tremor = -2;
	var tremors = -2;
	var tremulous = -2;
	var tribulation = -2;
	var tribute = 2;
	var tricked = -2;
	var trickery = -2;
	var triumph = 4;
	var triumphant = 4;
	var troll = -2;
	var trouble = -2;
	var troubled = -2;
	var troubles = -2;
	var troubling = -2;
	var trust = 1;
	var trusted = 2;
	var trusts = 1;
	var tumor = -2;
	var twat = -5;
	var tyran = -3;
	var tyrannic = -3;
	var tyrannical = -3;
	var tyrannically = -3;
	var tyrans = -3;
	var ubiquitous = 2;
	var ugh = -2;
	var ugliness = -3;
	var ugly = -3;
	var unable = -2;
	var unacceptable = -2;
	var unappeasable = -2;
	var unappreciated = -2;
	var unapproved = -2;
	var unattractive = -2;
	var unavailable = -1;
	var unavailing = -2;
	var unaware = -2;
	var unbearable = -2;
	var unbelievable = -1;
	var unbelieving = -1;
	var unbiased = 2;
	var uncertain = -1;
	var unclear = -1;
	var uncomfortable = -2;
	var unconcerned = -2;
	var unconfirmed = -1;
	var unconvinced = -1;
	var uncredited = -1;
	var undecided = -1;
	var undercooked = -2;
	var underestimate = -1;
	var underestimated = -1;
	var underestimates = -1;
	var underestimating = -1;
	var undermine = -2;
	var undermined = -2;
	var undermines = -2;
	var undermining = -2;
	var underperform = -2;
	var underperformed = -2;
	var underperforming = -2;
	var underperforms = -2;
	var undeserving = -2;
	var undesirable = -2;
	var uneasy = -2;
	var unemployed = -1;
	var unemployment = -2;
	var unequal = -1;
	var unequaled = 2;
	var unethical = -2;
	var uneventful = -2;
	var unfair = -2;
	var unfavorable = -2;
	var unfit = -2;
	var unfitted = -2;
	var unfocused = -2;
	var unforgivable = -3;
	var unforgiving = -2;
	var unfulfilled = -2;
	var unfunny = -2;
	var ungenerous = -2;
	var ungrateful = -3;
	var unhappy = -2;
	var unhappiness = -2;
	var unhealthy = -2;
	var unhygienic = -2;
	var unified = 1;
	var unimaginative = -2;
	var unimpressed = -2;
	var uninspired = -2;
	var unintelligent = -2;
	var unintentional = -2;
	var uninvolving = -2;
	var united = 1;
	var unjust = -2;
	var unlikely = -1;
	var unlovable = -2;
	var unloved = -2;
	var unmatched = 1;
	var unmotivated = -2;
	var unoriginal = -2;
	var unparliamentary = -2;
	var unpleasant = -2;
	var unpleasantness = -2;
	var unprofessional = -2;
	var unravel = 1;
	var unreleting = -2;
	var unresearched = -2;
	var unsafe = -2;
	var unsatisfied = -2;
	var unscientific = -2;
	var unsecured = -2;
	var unselfish = 2;
	var unsettled = -1;
	var unsold = -1;
	var unsophisticated = -2;
	var unsound = -2;
	var unstable = -2;
	var unstoppable = 2;
	var unsuccessful = -2;
	var unsuccessfully = -2;
	var unsupported = -2;
	var unsure = -1;
	var untarnished = 2;
	var untrue = -2;
	var unwanted = -2;
	var unworthy = -2;
	var uplifting = 2;
	var uproar = -3;
	var upset = -2;
	var upsets = -2;
	var upsetting = -2;
	var uptight = -2;
	var urgent = -1;
	var useful = 2;
	var usefulness = 2;
	var useless = -2;
	var uselessness = -2;
	var vague = -2;
	var validate = 1;
	var validated = 1;
	var validates = 1;
	var validating = 1;
	var vapid = -2;
	var verdict = -1;
	var verdicts = -1;
	var vested = 1;
	var vexation = -2;
	var vexing = -2;
	var vibrant = 3;
	var vicious = -2;
	var victim = -3;
	var victimization = -3;
	var victimize = -3;
	var victimized = -3;
	var victimizes = -3;
	var victimizing = -3;
	var victims = -3;
	var victor = 3;
	var victors = 3;
	var victory = 3;
	var victories = 3;
	var vigilant = 3;
	var vigor = 3;
	var vile = -3;
	var vindicate = 2;
	var vindicated = 2;
	var vindicates = 2;
	var vindicating = 2;
	var violate = -2;
	var violated = -2;
	var violates = -2;
	var violating = -2;
	var violation = -2;
	var violations = -2;
	var violence = -3;
	var violent = -3;
	var violently = -3;
	var virtuous = 2;
	var virulent = -2;
	var vision = 1;
	var visionary = 3;
	var visioning = 1;
	var visions = 1;
	var vitality = 3;
	var vitamin = 1;
	var vitriolic = -3;
	var vivacious = 3;
	var vividly = 2;
	var vociferous = -1;
	var vomit = -3;
	var vomited = -3;
	var vomiting = -3;
	var vomits = -3;
	var vulnerability = -2;
	var vulnerable = -2;
	var walkout = -2;
	var walkouts = -2;
	var wanker = -3;
	var want = 1;
	var war = -2;
	var warfare = -2;
	var warm = 1;
	var warmhearted = 2;
	var warmness = 2;
	var warmth = 2;
	var warn = -2;
	var warned = -2;
	var warning = -3;
	var warnings = -3;
	var warns = -2;
	var waste = -1;
	var wasted = -2;
	var wasting = -2;
	var wavering = -1;
	var weak = -2;
	var weakened = -2;
	var weakness = -2;
	var weaknesses = -2;
	var wealth = 3;
	var wealthier = 2;
	var wealthy = 2;
	var weary = -2;
	var weep = -2;
	var weeping = -2;
	var weird = -2;
	var welcome = 2;
	var welcomed = 2;
	var welcomes = 2;
	var whimsical = 1;
	var whitewash = -3;
	var whore = -4;
	var wicked = -2;
	var widowed = -1;
	var willingness = 2;
	var win = 4;
	var winner = 4;
	var winning = 4;
	var wins = 4;
	var winwin = 3;
	var wisdom = 1;
	var wish = 1;
	var wishes = 1;
	var wishing = 1;
	var withdrawal = -3;
	var wits = 2;
	var woebegone = -2;
	var woeful = -3;
	var won = 3;
	var wonderful = 4;
	var wonderfully = 4;
	var woo = 3;
	var woohoo = 3;
	var wooo = 4;
	var woow = 4;
	var worn = -1;
	var worried = -3;
	var worries = -3;
	var worry = -3;
	var worrying = -3;
	var worse = -3;
	var worsen = -3;
	var worsened = -3;
	var worsening = -3;
	var worsens = -3;
	var worshiped = 3;
	var worst = -3;
	var worth = 2;
	var worthless = -2;
	var worthy = 2;
	var wow = 4;
	var wowow = 4;
	var wowww = 4;
	var wrathful = -3;
	var wreck = -2;
	var wrenching = -2;
	var wrong = -2;
	var wrongdoing = -2;
	var wrongdoings = -2;
	var wronged = -2;
	var wrongful = -2;
	var wrongfully = -2;
	var wrongly = -2;
	var wtf = -4;
	var wtff = -4;
	var wtfff = -4;
	var xo = 3;
	var xoxo = 3;
	var xoxoxo = 4;
	var xoxoxoxo = 4;
	var yeah = 1;
	var yearning = 1;
	var yeees = 2;
	var yes = 1;
	var youthful = 2;
	var yucky = -2;
	var yummy = 3;
	var zealot = -2;
	var zealots = -2;
	var zealous = 2;
	var require$$0$1 = {
		abandon: abandon,
		abandoned: abandoned,
		abandons: abandons,
		abducted: abducted,
		abduction: abduction,
		abductions: abductions,
		abhor: abhor,
		abhorred: abhorred,
		abhorrent: abhorrent,
		abhors: abhors,
		abilities: abilities,
		ability: ability,
		aboard: aboard,
		aborted: aborted,
		aborts: aborts,
		absentee: absentee,
		absentees: absentees,
		absolve: absolve,
		absolved: absolved,
		absolves: absolves,
		absolving: absolving,
		absorbed: absorbed,
		abuse: abuse,
		abused: abused,
		abuses: abuses,
		abusing: abusing,
		abusive: abusive,
		accept: accept,
		acceptable: acceptable,
		acceptance: acceptance,
		accepted: accepted,
		accepting: accepting,
		accepts: accepts,
		accessible: accessible,
		accident: accident,
		accidental: accidental,
		accidentally: accidentally,
		accidents: accidents,
		acclaim: acclaim,
		acclaimed: acclaimed,
		accolade: accolade,
		accomplish: accomplish,
		accomplished: accomplished,
		accomplishes: accomplishes,
		accomplishment: accomplishment,
		accomplishments: accomplishments,
		accusation: accusation,
		accusations: accusations,
		accuse: accuse,
		accused: accused,
		accuses: accuses,
		accusing: accusing,
		ache: ache,
		achievable: achievable,
		aching: aching,
		acquit: acquit,
		acquits: acquits,
		acquitted: acquitted,
		acquitting: acquitting,
		acrimonious: acrimonious,
		active: active,
		adequate: adequate,
		admire: admire,
		admired: admired,
		admires: admires,
		admiring: admiring,
		admit: admit,
		admits: admits,
		admitted: admitted,
		admonish: admonish,
		admonished: admonished,
		adopt: adopt,
		adopts: adopts,
		adorable: adorable,
		adoration: adoration,
		adore: adore,
		adored: adored,
		adores: adores,
		adoring: adoring,
		adoringly: adoringly,
		advanced: advanced,
		advantage: advantage,
		advantageous: advantageous,
		advantageously: advantageously,
		advantages: advantages,
		adventure: adventure,
		adventures: adventures,
		adventurous: adventurous,
		adversary: adversary,
		advisable: advisable,
		affected: affected,
		affection: affection,
		affectionate: affectionate,
		affectionateness: affectionateness,
		afflicted: afflicted,
		affordable: affordable,
		affronted: affronted,
		aficionados: aficionados,
		afraid: afraid,
		aggravate: aggravate,
		aggravated: aggravated,
		aggravates: aggravates,
		aggravating: aggravating,
		aggression: aggression,
		aggressions: aggressions,
		aggressive: aggressive,
		aggressiveness: aggressiveness,
		aghast: aghast,
		agog: agog,
		agonise: agonise,
		agonised: agonised,
		agonises: agonises,
		agonising: agonising,
		agonize: agonize,
		agonized: agonized,
		agonizes: agonizes,
		agonizing: agonizing,
		agree: agree,
		agreeable: agreeable,
		agreed: agreed,
		agreement: agreement,
		agrees: agrees,
		alarm: alarm,
		alarmed: alarmed,
		alarmist: alarmist,
		alarmists: alarmists,
		alas: alas,
		alert: alert,
		alienation: alienation,
		alive: alive,
		allegation: allegation,
		allegations: allegations,
		allergic: allergic,
		allow: allow,
		ally: ally,
		alone: alone,
		altruistic: altruistic,
		amaze: amaze,
		amazed: amazed,
		amazes: amazes,
		amazing: amazing,
		ambitious: ambitious,
		ambivalent: ambivalent,
		amicable: amicable,
		amuse: amuse,
		amused: amused,
		amusement: amusement,
		amusements: amusements,
		anger: anger,
		angered: angered,
		angers: angers,
		angry: angry,
		anguish: anguish,
		anguished: anguished,
		animosity: animosity,
		annoy: annoy,
		annoyance: annoyance,
		annoyed: annoyed,
		annoying: annoying,
		annoys: annoys,
		antagonistic: antagonistic,
		anti: anti,
		anticipation: anticipation,
		anxiety: anxiety,
		anxious: anxious,
		apathetic: apathetic,
		apathy: apathy,
		apeshit: apeshit,
		apocalyptic: apocalyptic,
		apologise: apologise,
		apologised: apologised,
		apologises: apologises,
		apologising: apologising,
		apologize: apologize,
		apologized: apologized,
		apologizes: apologizes,
		apologizing: apologizing,
		apology: apology,
		appalled: appalled,
		appalling: appalling,
		appealing: appealing,
		appease: appease,
		appeased: appeased,
		appeases: appeases,
		appeasing: appeasing,
		applaud: applaud,
		applauded: applauded,
		applauding: applauding,
		applauds: applauds,
		applause: applause,
		appreciate: appreciate,
		appreciated: appreciated,
		appreciates: appreciates,
		appreciating: appreciating,
		appreciation: appreciation,
		apprehensive: apprehensive,
		appropriate: appropriate,
		appropriately: appropriately,
		approval: approval,
		approved: approved,
		approves: approves,
		ardent: ardent,
		arrest: arrest,
		arrested: arrested,
		arrests: arrests,
		arrogant: arrogant,
		arsehole: arsehole,
		ashame: ashame,
		ashamed: ashamed,
		ass: ass,
		assassination: assassination,
		assassinations: assassinations,
		assault: assault,
		assaults: assaults,
		asset: asset,
		assets: assets,
		assfucking: assfucking,
		asshole: asshole,
		astonished: astonished,
		astound: astound,
		astounded: astounded,
		astounding: astounding,
		astoundingly: astoundingly,
		astounds: astounds,
		atrocious: atrocious,
		atrocity: atrocity,
		attack: attack,
		attacked: attacked,
		attacking: attacking,
		attacks: attacks,
		attract: attract,
		attracted: attracted,
		attracting: attracting,
		attraction: attraction,
		attractions: attractions,
		attractive: attractive,
		attractively: attractively,
		attractiveness: attractiveness,
		attracts: attracts,
		audacious: audacious,
		aura: aura,
		authority: authority,
		avenge: avenge,
		avenged: avenged,
		avenger: avenger,
		avengers: avengers,
		avenges: avenges,
		avenging: avenging,
		avert: avert,
		averted: averted,
		averts: averts,
		avid: avid,
		avoid: avoid,
		avoided: avoided,
		avoids: avoids,
		"await": -1,
		awaited: awaited,
		awaits: awaits,
		award: award,
		awarded: awarded,
		awards: awards,
		awesome: awesome,
		awful: awful,
		awkward: awkward,
		axe: axe,
		axed: axed,
		backed: backed,
		backing: backing,
		backs: backs,
		bad: bad,
		"bad luck": -2,
		badass: badass,
		badly: badly,
		badness: badness,
		bailout: bailout,
		balanced: balanced,
		bamboozle: bamboozle,
		bamboozled: bamboozled,
		bamboozles: bamboozles,
		ban: ban,
		banish: banish,
		bankrupt: bankrupt,
		bankruptcy: bankruptcy,
		bankster: bankster,
		banned: banned,
		barbarian: barbarian,
		barbaric: barbaric,
		barbarous: barbarous,
		bargain: bargain,
		barrier: barrier,
		bastard: bastard,
		bastards: bastards,
		battle: battle,
		battled: battled,
		battles: battles,
		battling: battling,
		beaten: beaten,
		beatific: beatific,
		beating: beating,
		beauties: beauties,
		beautiful: beautiful,
		beautifully: beautifully,
		beautify: beautify,
		beauty: beauty,
		befit: befit,
		befitting: befitting,
		belittle: belittle,
		belittled: belittled,
		beloved: beloved,
		benefactor: benefactor,
		benefactors: benefactors,
		benefit: benefit,
		benefits: benefits,
		benefitted: benefitted,
		benefitting: benefitting,
		benevolent: benevolent,
		bereave: bereave,
		bereaved: bereaved,
		bereaves: bereaves,
		bereaving: bereaving,
		best: best,
		"best damn": 4,
		betray: betray,
		betrayal: betrayal,
		betrayed: betrayed,
		betraying: betraying,
		betrays: betrays,
		better: better,
		bias: bias,
		biased: biased,
		big: big,
		bitch: bitch,
		bitches: bitches,
		bitter: bitter,
		bitterest: bitterest,
		bitterly: bitterly,
		bizarre: bizarre,
		blackmail: blackmail,
		blackmailed: blackmailed,
		blackmailing: blackmailing,
		blackmails: blackmails,
		blah: blah,
		blame: blame,
		blamed: blamed,
		blames: blames,
		blaming: blaming,
		bless: bless,
		blesses: blesses,
		blessing: blessing,
		blessings: blessings,
		blind: blind,
		bliss: bliss,
		blissful: blissful,
		blithe: blithe,
		bloated: bloated,
		block: block,
		blockade: blockade,
		blockbuster: blockbuster,
		blocked: blocked,
		blocking: blocking,
		blocks: blocks,
		bloody: bloody,
		blurry: blurry,
		boastful: boastful,
		bold: bold,
		boldly: boldly,
		bomb: bomb,
		boost: boost,
		boosted: boosted,
		boosting: boosting,
		boosts: boosts,
		bore: bore,
		bored: bored,
		boring: boring,
		bother: bother,
		bothered: bothered,
		bothers: bothers,
		bothersome: bothersome,
		boycott: boycott,
		boycotted: boycotted,
		boycotting: boycotting,
		boycotts: boycotts,
		brainwashing: brainwashing,
		brave: brave,
		braveness: braveness,
		bravery: bravery,
		bravura: bravura,
		breach: breach,
		breached: breached,
		breaches: breaches,
		breaching: breaching,
		breakthrough: breakthrough,
		breathtaking: breathtaking,
		bribe: bribe,
		bribed: bribed,
		bribes: bribes,
		bribing: bribing,
		bright: bright,
		brightest: brightest,
		brightness: brightness,
		brilliant: brilliant,
		brilliance: brilliance,
		brilliances: brilliances,
		brisk: brisk,
		broke: broke,
		broken: broken,
		brooding: brooding,
		brutal: brutal,
		brutally: brutally,
		bullied: bullied,
		bullshit: bullshit,
		bully: bully,
		bullying: bullying,
		bummer: bummer,
		buoyant: buoyant,
		burden: burden,
		burdened: burdened,
		burdening: burdening,
		burdens: burdens,
		burglar: burglar,
		burglary: burglary,
		calm: calm,
		calmed: calmed,
		calming: calming,
		calms: calms,
		"can't stand": -3,
		cancel: cancel,
		cancelled: cancelled,
		cancelling: cancelling,
		cancels: cancels,
		cancer: cancer,
		capabilities: capabilities,
		capability: capability,
		capable: capable,
		captivated: captivated,
		care: care,
		carefree: carefree,
		careful: careful,
		carefully: carefully,
		carefulness: carefulness,
		careless: careless,
		cares: cares,
		caring: caring,
		"cashing in": -2,
		casualty: casualty,
		catastrophe: catastrophe,
		catastrophic: catastrophic,
		cautious: cautious,
		celebrate: celebrate,
		celebrated: celebrated,
		celebrates: celebrates,
		celebrating: celebrating,
		celebration: celebration,
		celebrations: celebrations,
		censor: censor,
		censored: censored,
		censors: censors,
		certain: certain,
		chagrin: chagrin,
		chagrined: chagrined,
		challenge: challenge,
		champion: champion,
		championed: championed,
		champions: champions,
		chance: chance,
		chances: chances,
		chaos: chaos,
		chaotic: chaotic,
		charged: charged,
		charges: charges,
		charisma: charisma,
		charitable: charitable,
		charm: charm,
		charming: charming,
		charmingly: charmingly,
		charmless: charmless,
		chastise: chastise,
		chastised: chastised,
		chastises: chastises,
		chastising: chastising,
		cheat: cheat,
		cheated: cheated,
		cheater: cheater,
		cheaters: cheaters,
		cheating: cheating,
		cheats: cheats,
		cheer: cheer,
		cheered: cheered,
		cheerful: cheerful,
		cheerfully: cheerfully,
		cheering: cheering,
		cheerless: cheerless,
		cheers: cheers,
		cheery: cheery,
		cherish: cherish,
		cherished: cherished,
		cherishes: cherishes,
		cherishing: cherishing,
		chic: chic,
		chide: chide,
		chided: chided,
		chides: chides,
		chiding: chiding,
		childish: childish,
		chilling: chilling,
		choke: choke,
		choked: choked,
		chokes: chokes,
		choking: choking,
		clarifies: clarifies,
		clarity: clarity,
		clash: clash,
		classy: classy,
		clean: clean,
		cleaner: cleaner,
		clear: clear,
		cleared: cleared,
		clearly: clearly,
		clears: clears,
		clever: clever,
		clouded: clouded,
		clueless: clueless,
		cock: cock,
		cocksucker: cocksucker,
		cocksuckers: cocksuckers,
		cocky: cocky,
		coerced: coerced,
		coercion: coercion,
		collapse: collapse,
		collapsed: collapsed,
		collapses: collapses,
		collapsing: collapsing,
		collide: collide,
		collides: collides,
		colliding: colliding,
		collision: collision,
		collisions: collisions,
		colluding: colluding,
		combat: combat,
		combats: combats,
		comedy: comedy,
		comfort: comfort,
		comfortable: comfortable,
		comfortably: comfortably,
		comforting: comforting,
		comforts: comforts,
		comic: comic,
		commend: commend,
		commended: commended,
		commit: commit,
		commitment: commitment,
		commits: commits,
		committed: committed,
		committing: committing,
		compassion: compassion,
		compassionate: compassionate,
		compelled: compelled,
		competencies: competencies,
		competent: competent,
		competitive: competitive,
		complacent: complacent,
		complain: complain,
		complained: complained,
		complaining: complaining,
		complains: complains,
		complaint: complaint,
		complaints: complaints,
		complicating: complicating,
		compliment: compliment,
		complimented: complimented,
		compliments: compliments,
		comprehensive: comprehensive,
		concerned: concerned,
		conciliate: conciliate,
		conciliated: conciliated,
		conciliates: conciliates,
		conciliating: conciliating,
		condemn: condemn,
		condemnation: condemnation,
		condemned: condemned,
		condemns: condemns,
		confidence: confidence,
		confident: confident,
		confidently: confidently,
		conflict: conflict,
		conflicting: conflicting,
		conflictive: conflictive,
		conflicts: conflicts,
		confuse: confuse,
		confused: confused,
		confusing: confusing,
		congrats: congrats,
		congratulate: congratulate,
		congratulation: congratulation,
		congratulations: congratulations,
		consent: consent,
		consents: consents,
		consolable: consolable,
		conspiracy: conspiracy,
		constipation: constipation,
		constrained: constrained,
		contagion: contagion,
		contagions: contagions,
		contagious: contagious,
		contaminant: contaminant,
		contaminants: contaminants,
		contaminate: contaminate,
		contaminated: contaminated,
		contaminates: contaminates,
		contaminating: contaminating,
		contamination: contamination,
		contaminations: contaminations,
		contempt: contempt,
		contemptible: contemptible,
		contemptuous: contemptuous,
		contemptuously: contemptuously,
		contend: contend,
		contender: contender,
		contending: contending,
		contentious: contentious,
		contestable: contestable,
		controversial: controversial,
		controversially: controversially,
		controversies: controversies,
		controversy: controversy,
		convicted: convicted,
		convince: convince,
		convinced: convinced,
		convinces: convinces,
		convivial: convivial,
		cool: cool,
		"cool stuff": 3,
		cornered: cornered,
		corpse: corpse,
		corrupt: corrupt,
		corrupted: corrupted,
		corrupting: corrupting,
		corruption: corruption,
		corrupts: corrupts,
		costly: costly,
		courage: courage,
		courageous: courageous,
		courageously: courageously,
		courageousness: courageousness,
		courteous: courteous,
		courtesy: courtesy,
		"cover-up": -3,
		coward: coward,
		cowardly: cowardly,
		coziness: coziness,
		cramp: cramp,
		crap: crap,
		crappy: crappy,
		crash: crash,
		crazier: crazier,
		craziest: craziest,
		crazy: crazy,
		creative: creative,
		crestfallen: crestfallen,
		cried: cried,
		cries: cries,
		crime: crime,
		crimes: crimes,
		criminal: criminal,
		criminals: criminals,
		criminate: criminate,
		criminated: criminated,
		criminates: criminates,
		crisis: crisis,
		critic: critic,
		criticise: criticise,
		criticised: criticised,
		criticises: criticises,
		criticising: criticising,
		criticism: criticism,
		criticize: criticize,
		criticized: criticized,
		criticizes: criticizes,
		criticizing: criticizing,
		critics: critics,
		critique: critique,
		crowding: crowding,
		crude: crude,
		cruel: cruel,
		cruelty: cruelty,
		crush: crush,
		crushed: crushed,
		crushes: crushes,
		crushing: crushing,
		cry: cry,
		crying: crying,
		cunning: cunning,
		cunt: cunt,
		curious: curious,
		curse: curse,
		cut: cut,
		cutback: cutback,
		cutbacks: cutbacks,
		cute: cute,
		cuts: cuts,
		cutting: cutting,
		cynic: cynic,
		cynical: cynical,
		cynicism: cynicism,
		damage: damage,
		damaged: damaged,
		damages: damages,
		damaging: damaging,
		damn: damn,
		"damn cute": 3,
		"damn good": 4,
		damned: damned,
		damnit: damnit,
		danger: danger,
		dangerous: dangerous,
		dangerously: dangerously,
		daredevil: daredevil,
		daring: daring,
		darkest: darkest,
		darkness: darkness,
		dauntless: dauntless,
		dazzling: dazzling,
		dead: dead,
		deadening: deadening,
		deadlock: deadlock,
		deadly: deadly,
		deafening: deafening,
		dear: dear,
		dearly: dearly,
		death: death,
		deaths: deaths,
		debonair: debonair,
		debt: debt,
		deceit: deceit,
		deceitful: deceitful,
		deceive: deceive,
		deceived: deceived,
		deceives: deceives,
		deceiving: deceiving,
		deception: deception,
		deceptive: deceptive,
		decisive: decisive,
		dedicated: dedicated,
		dedication: dedication,
		defeat: defeat,
		defeated: defeated,
		defect: defect,
		defective: defective,
		defects: defects,
		defender: defender,
		defenders: defenders,
		defenseless: defenseless,
		defer: defer,
		deferring: deferring,
		defiant: defiant,
		deficient: deficient,
		deficiency: deficiency,
		deficiencies: deficiencies,
		deficit: deficit,
		deformed: deformed,
		deformities: deformities,
		deformity: deformity,
		defraud: defraud,
		defrauds: defrauds,
		deft: deft,
		defunct: defunct,
		degrade: degrade,
		degraded: degraded,
		degrades: degrades,
		dehumanize: dehumanize,
		dehumanized: dehumanized,
		dehumanizes: dehumanizes,
		dehumanizing: dehumanizing,
		deject: deject,
		dejected: dejected,
		dejecting: dejecting,
		dejects: dejects,
		delay: delay,
		delayed: delayed,
		delectable: delectable,
		delicious: delicious,
		delight: delight,
		delighted: delighted,
		delightful: delightful,
		delightfully: delightfully,
		delighting: delighting,
		delights: delights,
		demand: demand,
		demanded: demanded,
		demanding: demanding,
		demands: demands,
		demonstration: demonstration,
		demoralize: demoralize,
		demoralized: demoralized,
		demoralizes: demoralizes,
		demoralizing: demoralizing,
		denial: denial,
		denials: denials,
		denied: denied,
		denier: denier,
		deniers: deniers,
		denies: denies,
		denounce: denounce,
		denounces: denounces,
		dent: dent,
		deny: deny,
		denying: denying,
		deplore: deplore,
		deplored: deplored,
		deplores: deplores,
		deploring: deploring,
		deport: deport,
		deported: deported,
		deporting: deporting,
		deports: deports,
		deportation: deportation,
		deportations: deportations,
		depressed: depressed,
		depressing: depressing,
		deprivation: deprivation,
		derail: derail,
		derailed: derailed,
		derails: derails,
		derelict: derelict,
		deride: deride,
		derided: derided,
		derides: derides,
		deriding: deriding,
		derision: derision,
		desirable: desirable,
		desire: desire,
		desired: desired,
		desirous: desirous,
		despair: despair,
		despairing: despairing,
		despairs: despairs,
		desperate: desperate,
		desperately: desperately,
		despondent: despondent,
		destroy: destroy,
		destroyed: destroyed,
		destroying: destroying,
		destroys: destroys,
		destruction: destruction,
		destructive: destructive,
		detached: detached,
		detain: detain,
		detained: detained,
		detention: detention,
		deteriorate: deteriorate,
		deteriorated: deteriorated,
		deteriorates: deteriorates,
		deteriorating: deteriorating,
		determined: determined,
		deterrent: deterrent,
		detract: detract,
		detracted: detracted,
		detracts: detracts,
		devastate: devastate,
		devastated: devastated,
		devastating: devastating,
		devastation: devastation,
		devastations: devastations,
		devoted: devoted,
		devotion: devotion,
		devotional: devotional,
		diamond: diamond,
		dick: dick,
		dickhead: dickhead,
		die: die,
		died: died,
		difficult: difficult,
		diffident: diffident,
		dignity: dignity,
		dilemma: dilemma,
		dilligence: dilligence,
		dipshit: dipshit,
		dire: dire,
		direful: direful,
		dirt: dirt,
		dirtier: dirtier,
		dirtiest: dirtiest,
		dirty: dirty,
		disabilities: disabilities,
		disability: disability,
		disabling: disabling,
		disadvantage: disadvantage,
		disadvantaged: disadvantaged,
		disagree: disagree,
		disagreeable: disagreeable,
		disagreement: disagreement,
		disappear: disappear,
		disappeared: disappeared,
		disappears: disappears,
		disappoint: disappoint,
		disappointed: disappointed,
		disappointing: disappointing,
		disappointment: disappointment,
		disappointments: disappointments,
		disappoints: disappoints,
		disapproval: disapproval,
		disapprovals: disapprovals,
		disapprove: disapprove,
		disapproved: disapproved,
		disapproves: disapproves,
		disapproving: disapproving,
		disaster: disaster,
		disasters: disasters,
		disastrous: disastrous,
		disbelieve: disbelieve,
		discard: discard,
		discarded: discarded,
		discarding: discarding,
		discards: discards,
		discernment: discernment,
		discomfort: discomfort,
		disconsolate: disconsolate,
		disconsolation: disconsolation,
		discontented: discontented,
		discord: discord,
		discounted: discounted,
		discouraged: discouraged,
		discredited: discredited,
		discriminate: discriminate,
		discriminated: discriminated,
		discriminates: discriminates,
		discriminating: discriminating,
		discriminatory: discriminatory,
		disdain: disdain,
		disease: disease,
		diseases: diseases,
		disgrace: disgrace,
		disgraced: disgraced,
		disguise: disguise,
		disguised: disguised,
		disguises: disguises,
		disguising: disguising,
		disgust: disgust,
		disgusted: disgusted,
		disgustful: disgustful,
		disgusting: disgusting,
		disheartened: disheartened,
		dishonest: dishonest,
		disillusioned: disillusioned,
		disinclined: disinclined,
		disjointed: disjointed,
		dislike: dislike,
		disliked: disliked,
		dislikes: dislikes,
		dismal: dismal,
		dismayed: dismayed,
		dismissed: dismissed,
		disorder: disorder,
		disorders: disorders,
		disorganized: disorganized,
		disoriented: disoriented,
		disparage: disparage,
		disparaged: disparaged,
		disparages: disparages,
		disparaging: disparaging,
		displeased: displeased,
		displeasure: displeasure,
		disproportionate: disproportionate,
		dispute: dispute,
		disputed: disputed,
		disputes: disputes,
		disputing: disputing,
		disqualified: disqualified,
		disquiet: disquiet,
		disregard: disregard,
		disregarded: disregarded,
		disregarding: disregarding,
		disregards: disregards,
		disrespect: disrespect,
		disrespected: disrespected,
		disrupt: disrupt,
		disrupted: disrupted,
		disrupting: disrupting,
		disruption: disruption,
		disruptions: disruptions,
		disruptive: disruptive,
		disrupts: disrupts,
		dissatisfied: dissatisfied,
		distasteful: distasteful,
		distinguished: distinguished,
		distort: distort,
		distorted: distorted,
		distorting: distorting,
		distorts: distorts,
		distract: distract,
		distracted: distracted,
		distraction: distraction,
		distracts: distracts,
		distress: distress,
		distressed: distressed,
		distresses: distresses,
		distressing: distressing,
		distrust: distrust,
		distrustful: distrustful,
		disturb: disturb,
		disturbed: disturbed,
		disturbing: disturbing,
		disturbs: disturbs,
		dithering: dithering,
		diverting: diverting,
		dizzy: dizzy,
		dodging: dodging,
		dodgy: dodgy,
		"does not work": -3,
		dolorous: dolorous,
		donate: donate,
		donated: donated,
		donates: donates,
		donating: donating,
		donation: donation,
		"dont like": -2,
		doom: doom,
		doomed: doomed,
		doubt: doubt,
		doubted: doubted,
		doubtful: doubtful,
		doubting: doubting,
		doubts: doubts,
		douche: douche,
		douchebag: douchebag,
		dour: dour,
		downcast: downcast,
		downer: downer,
		downhearted: downhearted,
		downside: downside,
		drag: drag,
		dragged: dragged,
		drags: drags,
		drained: drained,
		dread: dread,
		dreaded: dreaded,
		dreadful: dreadful,
		dreading: dreading,
		dream: dream,
		dreams: dreams,
		dreary: dreary,
		droopy: droopy,
		drop: drop,
		dropped: dropped,
		drown: drown,
		drowned: drowned,
		drowns: drowns,
		drudgery: drudgery,
		drunk: drunk,
		dubious: dubious,
		dud: dud,
		dull: dull,
		dumb: dumb,
		dumbass: dumbass,
		dump: dump,
		dumped: dumped,
		dumps: dumps,
		dupe: dupe,
		duped: duped,
		dupery: dupery,
		durable: durable,
		dying: dying,
		dysfunction: dysfunction,
		eager: eager,
		earnest: earnest,
		ease: ease,
		easy: easy,
		ecstatic: ecstatic,
		eerie: eerie,
		eery: eery,
		effective: effective,
		effectively: effectively,
		effectiveness: effectiveness,
		effortlessly: effortlessly,
		elated: elated,
		elation: elation,
		elegant: elegant,
		elegantly: elegantly,
		embarrass: embarrass,
		embarrassed: embarrassed,
		embarrasses: embarrasses,
		embarrassing: embarrassing,
		embarrassment: embarrassment,
		embezzlement: embezzlement,
		embittered: embittered,
		embrace: embrace,
		emergency: emergency,
		empathetic: empathetic,
		empower: empower,
		empowerment: empowerment,
		emptiness: emptiness,
		empty: empty,
		enchanted: enchanted,
		encourage: encourage,
		encouraged: encouraged,
		encouragement: encouragement,
		encourages: encourages,
		encouraging: encouraging,
		endorse: endorse,
		endorsed: endorsed,
		endorsement: endorsement,
		endorses: endorses,
		enemies: enemies,
		enemy: enemy,
		energetic: energetic,
		engage: engage,
		engages: engages,
		engrossed: engrossed,
		engrossing: engrossing,
		enjoy: enjoy,
		enjoyable: enjoyable,
		enjoyed: enjoyed,
		enjoying: enjoying,
		enjoys: enjoys,
		enlighten: enlighten,
		enlightened: enlightened,
		enlightening: enlightening,
		enlightens: enlightens,
		ennui: ennui,
		enrage: enrage,
		enraged: enraged,
		enrages: enrages,
		enraging: enraging,
		enrapture: enrapture,
		enslave: enslave,
		enslaved: enslaved,
		enslaves: enslaves,
		ensure: ensure,
		ensuring: ensuring,
		enterprising: enterprising,
		entertaining: entertaining,
		enthral: enthral,
		enthusiastic: enthusiastic,
		entitled: entitled,
		entrusted: entrusted,
		envies: envies,
		envious: envious,
		"environment-friendly": 2,
		envy: envy,
		envying: envying,
		erroneous: erroneous,
		error: error,
		errors: errors,
		"escape": -1,
		escapes: escapes,
		escaping: escaping,
		esteem: esteem,
		esteemed: esteemed,
		ethical: ethical,
		euphoria: euphoria,
		euphoric: euphoric,
		evacuate: evacuate,
		evacuated: evacuated,
		evacuates: evacuates,
		evacuating: evacuating,
		evacuation: evacuation,
		evergreen: evergreen,
		evergreens: evergreens,
		evergreening: evergreening,
		eviction: eviction,
		evil: evil,
		exacerbate: exacerbate,
		exacerbated: exacerbated,
		exacerbates: exacerbates,
		exacerbating: exacerbating,
		exaggerate: exaggerate,
		exaggerated: exaggerated,
		exaggerates: exaggerates,
		exaggerating: exaggerating,
		exasparate: exasparate,
		exasperated: exasperated,
		exasperates: exasperates,
		exasperating: exasperating,
		excellence: excellence,
		excellent: excellent,
		excite: excite,
		excited: excited,
		excitement: excitement,
		exciting: exciting,
		exclude: exclude,
		excluded: excluded,
		exclusion: exclusion,
		exclusive: exclusive,
		excruciatingly: excruciatingly,
		excuse: excuse,
		exempt: exempt,
		exhausted: exhausted,
		exhilarated: exhilarated,
		exhilarates: exhilarates,
		exhilarating: exhilarating,
		exonerate: exonerate,
		exonerated: exonerated,
		exonerates: exonerates,
		exonerating: exonerating,
		expand: expand,
		expands: expands,
		expel: expel,
		expelled: expelled,
		expelling: expelling,
		expels: expels,
		expertly: expertly,
		exploit: exploit,
		exploited: exploited,
		exploiting: exploiting,
		exploits: exploits,
		exploration: exploration,
		explorations: explorations,
		expose: expose,
		exposed: exposed,
		exposes: exposes,
		exposing: exposing,
		exquisite: exquisite,
		extend: extend,
		"extends": 1,
		extremist: extremist,
		extremists: extremists,
		exuberant: exuberant,
		exultant: exultant,
		exultantly: exultantly,
		fabulous: fabulous,
		fabulously: fabulously,
		fad: fad,
		fag: fag,
		faggot: faggot,
		faggots: faggots,
		fail: fail,
		failed: failed,
		failing: failing,
		fails: fails,
		failure: failure,
		failures: failures,
		fainthearted: fainthearted,
		fair: fair,
		fairness: fairness,
		faith: faith,
		faithful: faithful,
		fake: fake,
		faker: faker,
		fakes: fakes,
		faking: faking,
		fallen: fallen,
		falling: falling,
		"false": -1,
		falsely: falsely,
		falsified: falsified,
		falsify: falsify,
		fame: fame,
		famine: famine,
		famous: famous,
		fan: fan,
		fantastic: fantastic,
		farce: farce,
		fascinate: fascinate,
		fascinated: fascinated,
		fascinates: fascinates,
		fascinating: fascinating,
		fascination: fascination,
		fascist: fascist,
		fascists: fascists,
		fatal: fatal,
		fatalities: fatalities,
		fatality: fatality,
		fatigue: fatigue,
		fatigued: fatigued,
		fatigues: fatigues,
		fatiguing: fatiguing,
		favor: favor,
		favorable: favorable,
		favorably: favorably,
		favored: favored,
		favorite: favorite,
		favorited: favorited,
		favorites: favorites,
		favors: favors,
		favour: favour,
		favourable: favourable,
		favourably: favourably,
		favoured: favoured,
		favourite: favourite,
		favourited: favourited,
		favourites: favourites,
		favours: favours,
		fear: fear,
		fearful: fearful,
		fearfully: fearfully,
		fearing: fearing,
		fearless: fearless,
		fearlessness: fearlessness,
		fearsome: fearsome,
		"fed up": -3,
		feeble: feeble,
		feeling: feeling,
		felonies: felonies,
		felony: felony,
		fertile: fertile,
		fervent: fervent,
		fervid: fervid,
		festive: festive,
		fever: fever,
		fiasco: fiasco,
		fidgety: fidgety,
		fight: fight,
		fighting: fighting,
		fine: fine,
		fines: fines,
		finest: finest,
		fire: fire,
		fired: fired,
		firing: firing,
		fit: fit,
		fitness: fitness,
		filth: filth,
		filthy: filthy,
		flagship: flagship,
		flaw: flaw,
		flawed: flawed,
		flawless: flawless,
		flawlessly: flawlessly,
		flaws: flaws,
		flees: flees,
		flop: flop,
		flops: flops,
		flu: flu,
		flustered: flustered,
		focused: focused,
		fond: fond,
		fondness: fondness,
		fool: fool,
		foolish: foolish,
		fools: fools,
		forbid: forbid,
		forbidden: forbidden,
		forbidding: forbidding,
		forced: forced,
		foreclosure: foreclosure,
		foreclosures: foreclosures,
		forefront: forefront,
		forget: forget,
		forgetful: forgetful,
		forgettable: forgettable,
		forgive: forgive,
		forgiving: forgiving,
		forgot: forgot,
		forgotten: forgotten,
		fortune: fortune,
		fortunate: fortunate,
		fortunately: fortunately,
		foul: foul,
		frantic: frantic,
		fraud: fraud,
		frauds: frauds,
		fraudster: fraudster,
		fraudsters: fraudsters,
		fraudulence: fraudulence,
		fraudulent: fraudulent,
		freak: freak,
		free: free,
		freedom: freedom,
		freedoms: freedoms,
		frenzy: frenzy,
		fresh: fresh,
		friend: friend,
		friendliness: friendliness,
		friendly: friendly,
		friendship: friendship,
		fright: fright,
		frightened: frightened,
		frightening: frightening,
		frikin: frikin,
		frisky: frisky,
		frowning: frowning,
		fruitless: fruitless,
		frustrate: frustrate,
		frustrated: frustrated,
		frustrates: frustrates,
		frustrating: frustrating,
		frustration: frustration,
		ftw: ftw,
		fuck: fuck,
		fucked: fucked,
		fucker: fucker,
		fuckers: fuckers,
		fuckface: fuckface,
		fuckhead: fuckhead,
		fuckin: fuckin,
		fucking: fucking,
		"fucking amazing": 4,
		"fucking beautiful": 4,
		"fucking cute": 4,
		"fucking fantastic": 4,
		"fucking good": 4,
		"fucking great": 4,
		"fucking hot": 2,
		"fucking love": 4,
		"fucking loves": 4,
		"fucking perfect": 4,
		fucktard: fucktard,
		fud: fud,
		fuked: fuked,
		fuking: fuking,
		fulfill: fulfill,
		fulfilled: fulfilled,
		fulfillment: fulfillment,
		fulfills: fulfills,
		fuming: fuming,
		fun: fun,
		funeral: funeral,
		funerals: funerals,
		funky: funky,
		funnier: funnier,
		funny: funny,
		furious: furious,
		futile: futile,
		gag: gag,
		gagged: gagged,
		gain: gain,
		gained: gained,
		gaining: gaining,
		gains: gains,
		gallant: gallant,
		gallantly: gallantly,
		gallantry: gallantry,
		"game-changing": 3,
		garbage: garbage,
		gem: gem,
		generous: generous,
		generously: generously,
		genial: genial,
		ghastly: ghastly,
		ghost: ghost,
		giddy: giddy,
		gift: gift,
		glad: glad,
		glamorous: glamorous,
		glamourous: glamourous,
		glee: glee,
		gleeful: gleeful,
		gloom: gloom,
		gloomy: gloomy,
		glorious: glorious,
		glory: glory,
		glum: glum,
		god: god,
		goddamn: goddamn,
		godsend: godsend,
		gold: gold,
		good: good,
		goodlooking: goodlooking,
		goodmorning: goodmorning,
		goodness: goodness,
		goodwill: goodwill,
		goofiness: goofiness,
		goofy: goofy,
		grace: grace,
		graceful: graceful,
		gracious: gracious,
		grand: grand,
		grant: grant,
		granted: granted,
		granting: granting,
		grants: grants,
		grateful: grateful,
		gratification: gratification,
		grave: grave,
		gray: gray,
		grisly: grisly,
		gr8: gr8,
		great: great,
		greater: greater,
		greatest: greatest,
		greed: greed,
		greedy: greedy,
		"green wash": -3,
		"green washing": -3,
		greenwash: greenwash,
		greenwasher: greenwasher,
		greenwashers: greenwashers,
		greenwashing: greenwashing,
		greet: greet,
		greeted: greeted,
		greeting: greeting,
		greetings: greetings,
		greets: greets,
		grey: grey,
		grief: grief,
		grieved: grieved,
		grim: grim,
		gripping: gripping,
		groan: groan,
		groaned: groaned,
		groaning: groaning,
		groans: groans,
		gross: gross,
		growing: growing,
		growth: growth,
		growths: growths,
		gruesome: gruesome,
		guarantee: guarantee,
		guilt: guilt,
		guilty: guilty,
		gullibility: gullibility,
		gullible: gullible,
		gun: gun,
		ha: ha,
		hacked: hacked,
		haha: haha,
		hahaha: hahaha,
		hahahah: hahahah,
		hail: hail,
		hailed: hailed,
		hallelujah: hallelujah,
		handpicked: handpicked,
		handsome: handsome,
		hapless: hapless,
		haplessness: haplessness,
		happiest: happiest,
		happiness: happiness,
		happy: happy,
		harass: harass,
		harassed: harassed,
		harasses: harasses,
		harassing: harassing,
		harassment: harassment,
		hard: hard,
		hardier: hardier,
		hardship: hardship,
		hardy: hardy,
		harm: harm,
		harmed: harmed,
		harmful: harmful,
		harming: harming,
		harmony: harmony,
		harmonious: harmonious,
		harmoniously: harmoniously,
		harms: harms,
		harried: harried,
		harsh: harsh,
		harsher: harsher,
		harshest: harshest,
		harshly: harshly,
		hate: hate,
		hated: hated,
		hater: hater,
		haters: haters,
		hates: hates,
		hating: hating,
		hatred: hatred,
		haunt: haunt,
		haunted: haunted,
		haunting: haunting,
		haunts: haunts,
		havoc: havoc,
		hazardous: hazardous,
		headache: headache,
		healthy: healthy,
		heartbreaking: heartbreaking,
		heartbroken: heartbroken,
		heartfelt: heartfelt,
		heartless: heartless,
		heartwarming: heartwarming,
		heaven: heaven,
		heavenly: heavenly,
		heavyhearted: heavyhearted,
		hehe: hehe,
		hell: hell,
		hellish: hellish,
		help: help,
		helpful: helpful,
		helping: helping,
		helpless: helpless,
		helps: helps,
		hero: hero,
		heroes: heroes,
		heroic: heroic,
		hesitant: hesitant,
		hesitate: hesitate,
		hid: hid,
		hide: hide,
		hideous: hideous,
		hides: hides,
		hiding: hiding,
		highlight: highlight,
		hilarious: hilarious,
		hinder: hinder,
		hindrance: hindrance,
		hoax: hoax,
		hollow: hollow,
		homeless: homeless,
		homesick: homesick,
		homicide: homicide,
		homicides: homicides,
		honest: honest,
		honor: honor,
		honored: honored,
		honoring: honoring,
		honour: honour,
		honoured: honoured,
		honouring: honouring,
		hooligan: hooligan,
		hooliganism: hooliganism,
		hooligans: hooligans,
		hope: hope,
		hopeful: hopeful,
		hopefully: hopefully,
		hopeless: hopeless,
		hopelessness: hopelessness,
		hopes: hopes,
		hoping: hoping,
		horrendous: horrendous,
		horrid: horrid,
		horrible: horrible,
		horrific: horrific,
		horrified: horrified,
		hospitalized: hospitalized,
		hostile: hostile,
		huckster: huckster,
		hug: hug,
		huge: huge,
		hugs: hugs,
		humane: humane,
		humble: humble,
		humbug: humbug,
		humerous: humerous,
		humiliated: humiliated,
		humiliation: humiliation,
		humor: humor,
		humorous: humorous,
		humour: humour,
		humourous: humourous,
		hunger: hunger,
		hurrah: hurrah,
		hurt: hurt,
		hurting: hurting,
		hurts: hurts,
		hypocritical: hypocritical,
		hysteria: hysteria,
		hysterical: hysterical,
		hysterics: hysterics,
		icky: icky,
		idiocy: idiocy,
		idiot: idiot,
		idiotic: idiotic,
		ignorance: ignorance,
		ignorant: ignorant,
		ignore: ignore,
		ignored: ignored,
		ignores: ignores,
		ill: ill,
		"ill-fated": -2,
		illegal: illegal,
		illegally: illegally,
		illegitimate: illegitimate,
		illiteracy: illiteracy,
		illness: illness,
		illnesses: illnesses,
		illogical: illogical,
		imaginative: imaginative,
		imbecile: imbecile,
		immobilized: immobilized,
		immortal: immortal,
		immune: immune,
		impair: impair,
		impaired: impaired,
		impairing: impairing,
		impairment: impairment,
		impairs: impairs,
		impatient: impatient,
		impeachment: impeachment,
		impeachments: impeachments,
		impede: impede,
		impeded: impeded,
		impedes: impedes,
		impeding: impeding,
		impedingly: impedingly,
		imperfect: imperfect,
		importance: importance,
		important: important,
		impose: impose,
		imposed: imposed,
		imposes: imposes,
		imposing: imposing,
		imposter: imposter,
		impotent: impotent,
		impress: impress,
		impressed: impressed,
		impresses: impresses,
		impressive: impressive,
		imprisoned: imprisoned,
		imprisonment: imprisonment,
		improper: improper,
		improperly: improperly,
		improve: improve,
		improved: improved,
		improvement: improvement,
		improves: improves,
		improving: improving,
		inability: inability,
		inaction: inaction,
		inadequate: inadequate,
		inadvertently: inadvertently,
		inappropriate: inappropriate,
		incapable: incapable,
		incapacitated: incapacitated,
		incapacitates: incapacitates,
		incapacitating: incapacitating,
		incense: incense,
		incensed: incensed,
		incenses: incenses,
		incensing: incensing,
		incoherent: incoherent,
		incompetence: incompetence,
		incompetent: incompetent,
		incomplete: incomplete,
		incomprehensible: incomprehensible,
		inconsiderate: inconsiderate,
		inconvenience: inconvenience,
		inconvenient: inconvenient,
		increase: increase,
		increased: increased,
		indecisive: indecisive,
		indestructible: indestructible,
		indicted: indicted,
		indifference: indifference,
		indifferent: indifferent,
		indignant: indignant,
		indignation: indignation,
		indoctrinate: indoctrinate,
		indoctrinated: indoctrinated,
		indoctrinates: indoctrinates,
		indoctrinating: indoctrinating,
		inediable: inediable,
		inexorable: inexorable,
		inexcusable: inexcusable,
		ineffective: ineffective,
		ineffectively: ineffectively,
		ineffectual: ineffectual,
		inefficiency: inefficiency,
		inefficient: inefficient,
		inefficiently: inefficiently,
		inept: inept,
		ineptitude: ineptitude,
		infantile: infantile,
		infantilized: infantilized,
		infatuated: infatuated,
		infatuation: infatuation,
		infect: infect,
		infected: infected,
		infecting: infecting,
		infection: infection,
		infections: infections,
		infectious: infectious,
		infects: infects,
		inferior: inferior,
		infest: infest,
		infested: infested,
		infesting: infesting,
		infests: infests,
		inflamed: inflamed,
		inflict: inflict,
		inflicted: inflicted,
		inflicting: inflicting,
		inflicts: inflicts,
		influential: influential,
		infract: infract,
		infracted: infracted,
		infracting: infracting,
		infracts: infracts,
		infringement: infringement,
		infuriate: infuriate,
		infuriated: infuriated,
		infuriates: infuriates,
		infuriating: infuriating,
		inhibit: inhibit,
		inhuman: inhuman,
		injured: injured,
		injuries: injuries,
		injury: injury,
		injustice: injustice,
		innovate: innovate,
		innovates: innovates,
		innovation: innovation,
		innovative: innovative,
		inoperative: inoperative,
		inquisition: inquisition,
		inquisitive: inquisitive,
		insane: insane,
		insanity: insanity,
		insecure: insecure,
		insensitive: insensitive,
		insensitivity: insensitivity,
		insignificant: insignificant,
		insipid: insipid,
		insolvent: insolvent,
		insomnia: insomnia,
		inspiration: inspiration,
		inspirational: inspirational,
		inspire: inspire,
		inspired: inspired,
		inspires: inspires,
		inspiring: inspiring,
		insufficiency: insufficiency,
		insufficient: insufficient,
		insufficiently: insufficiently,
		insult: insult,
		insulted: insulted,
		insulting: insulting,
		insults: insults,
		intact: intact,
		integrity: integrity,
		intelligent: intelligent,
		intense: intense,
		interest: interest,
		interested: interested,
		interesting: interesting,
		interests: interests,
		interrogated: interrogated,
		interrupt: interrupt,
		interrupted: interrupted,
		interrupting: interrupting,
		interruption: interruption,
		interrupts: interrupts,
		intimacy: intimacy,
		intimidate: intimidate,
		intimidated: intimidated,
		intimidates: intimidates,
		intimidating: intimidating,
		intimidation: intimidation,
		intransigence: intransigence,
		intransigency: intransigency,
		intricate: intricate,
		intrigues: intrigues,
		invasion: invasion,
		invincible: invincible,
		invite: invite,
		inviting: inviting,
		invulnerable: invulnerable,
		irate: irate,
		ironic: ironic,
		irony: irony,
		irrational: irrational,
		irreparable: irreparable,
		irreproducible: irreproducible,
		irresistible: irresistible,
		irresistibly: irresistibly,
		irresolute: irresolute,
		irresponsible: irresponsible,
		irresponsibly: irresponsibly,
		irreversible: irreversible,
		irreversibly: irreversibly,
		irritate: irritate,
		irritated: irritated,
		irritates: irritates,
		irritating: irritating,
		isolated: isolated,
		itchy: itchy,
		jackass: jackass,
		jackasses: jackasses,
		jailed: jailed,
		jaunty: jaunty,
		jealous: jealous,
		jealousy: jealousy,
		jeopardy: jeopardy,
		jerk: jerk,
		jesus: jesus,
		jewel: jewel,
		jewels: jewels,
		jocular: jocular,
		join: join,
		joke: joke,
		jokes: jokes,
		jolly: jolly,
		jovial: jovial,
		joy: joy,
		joyful: joyful,
		joyfully: joyfully,
		joyless: joyless,
		joyous: joyous,
		jubilant: jubilant,
		jumpy: jumpy,
		justice: justice,
		justifiably: justifiably,
		justified: justified,
		keen: keen,
		kickback: kickback,
		kickbacks: kickbacks,
		kidnap: kidnap,
		kidnapped: kidnapped,
		kidnapping: kidnapping,
		kidnappings: kidnappings,
		kidnaps: kidnaps,
		kill: kill,
		killed: killed,
		killing: killing,
		kills: kills,
		kind: kind,
		"kind of": 0,
		kinder: kinder,
		kindness: kindness,
		kiss: kiss,
		kudos: kudos,
		lack: lack,
		lackadaisical: lackadaisical,
		lag: lag,
		lagged: lagged,
		lagging: lagging,
		lags: lags,
		lame: lame,
		landmark: landmark,
		lapse: lapse,
		lapsed: lapsed,
		laugh: laugh,
		laughed: laughed,
		laughing: laughing,
		laughs: laughs,
		laughting: laughting,
		launched: launched,
		lawl: lawl,
		lawsuit: lawsuit,
		lawsuits: lawsuits,
		lazy: lazy,
		leadership: leadership,
		leading: leading,
		leak: leak,
		leaked: leaked,
		leave: leave,
		legal: legal,
		legally: legally,
		lenient: lenient,
		lethal: lethal,
		lethality: lethality,
		lethargic: lethargic,
		lethargy: lethargy,
		liar: liar,
		liars: liars,
		libelous: libelous,
		lied: lied,
		lifeless: lifeless,
		lifesaver: lifesaver,
		lighthearted: lighthearted,
		likable: likable,
		like: like,
		likeable: likeable,
		liked: liked,
		likers: likers,
		likes: likes,
		liking: liking,
		limitation: limitation,
		limited: limited,
		limits: limits,
		litigation: litigation,
		litigious: litigious,
		lively: lively,
		livid: livid,
		lmao: lmao,
		lmfao: lmfao,
		loathe: loathe,
		loathed: loathed,
		loathes: loathes,
		loathing: loathing,
		loathsome: loathsome,
		lobbied: lobbied,
		lobby: lobby,
		lobbying: lobbying,
		lobbyist: lobbyist,
		lobbyists: lobbyists,
		lol: lol,
		lolol: lolol,
		lololol: lololol,
		lolololol: lolololol,
		lonely: lonely,
		lonesome: lonesome,
		longing: longing,
		lool: lool,
		loom: loom,
		loomed: loomed,
		looming: looming,
		looms: looms,
		loool: loool,
		looool: looool,
		loose: loose,
		looses: looses,
		loser: loser,
		losing: losing,
		loss: loss,
		losses: losses,
		lost: lost,
		lousy: lousy,
		lovable: lovable,
		love: love,
		loved: loved,
		lovelies: lovelies,
		lovely: lovely,
		loves: loves,
		loving: loving,
		"loving-kindness": 3,
		lowest: lowest,
		loyal: loyal,
		loyalty: loyalty,
		luck: luck,
		luckily: luckily,
		lucky: lucky,
		lucrative: lucrative,
		ludicrous: ludicrous,
		lugubrious: lugubrious,
		lunatic: lunatic,
		lunatics: lunatics,
		lurk: lurk,
		lurking: lurking,
		lurks: lurks,
		luxury: luxury,
		macabre: macabre,
		mad: mad,
		maddening: maddening,
		"made-up": -1,
		madly: madly,
		madness: madness,
		magnificent: magnificent,
		maladaption: maladaption,
		maldevelopment: maldevelopment,
		maltreatment: maltreatment,
		mandatory: mandatory,
		manipulated: manipulated,
		manipulating: manipulating,
		manipulation: manipulation,
		manslaughter: manslaughter,
		marvel: marvel,
		marvelous: marvelous,
		marvels: marvels,
		masterpiece: masterpiece,
		masterpieces: masterpieces,
		matter: matter,
		matters: matters,
		mature: mature,
		meaningful: meaningful,
		meaningless: meaningless,
		medal: medal,
		mediocrity: mediocrity,
		meditative: meditative,
		melancholy: melancholy,
		memorable: memorable,
		memoriam: memoriam,
		menace: menace,
		menaced: menaced,
		menaces: menaces,
		mercy: mercy,
		merry: merry,
		mesmerizing: mesmerizing,
		mess: mess,
		messed: messed,
		"messing up": -2,
		methodical: methodical,
		methodically: methodically,
		mindless: mindless,
		miracle: miracle,
		mirth: mirth,
		mirthful: mirthful,
		mirthfully: mirthfully,
		misbehave: misbehave,
		misbehaved: misbehaved,
		misbehaves: misbehaves,
		misbehaving: misbehaving,
		misbranding: misbranding,
		miscast: miscast,
		mischief: mischief,
		mischiefs: mischiefs,
		misclassified: misclassified,
		misclassifies: misclassifies,
		misclassify: misclassify,
		misconduct: misconduct,
		misconducted: misconducted,
		misconducting: misconducting,
		misconducts: misconducts,
		miserable: miserable,
		miserably: miserably,
		misery: misery,
		misfire: misfire,
		misfortune: misfortune,
		misgiving: misgiving,
		misinformation: misinformation,
		misinformed: misinformed,
		misinterpreted: misinterpreted,
		mislead: mislead,
		misleaded: misleaded,
		misleading: misleading,
		misleads: misleads,
		misplace: misplace,
		misplaced: misplaced,
		misplaces: misplaces,
		misplacing: misplacing,
		mispricing: mispricing,
		misread: misread,
		misreport: misreport,
		misreported: misreported,
		misreporting: misreporting,
		misreports: misreports,
		misrepresent: misrepresent,
		misrepresentation: misrepresentation,
		misrepresentations: misrepresentations,
		misrepresented: misrepresented,
		misrepresenting: misrepresenting,
		misrepresents: misrepresents,
		miss: miss,
		missed: missed,
		missing: missing,
		mistake: mistake,
		mistaken: mistaken,
		mistakes: mistakes,
		mistaking: mistaking,
		misunderstand: misunderstand,
		misunderstanding: misunderstanding,
		misunderstands: misunderstands,
		misunderstood: misunderstood,
		misuse: misuse,
		misused: misused,
		misuses: misuses,
		misusing: misusing,
		moan: moan,
		moaned: moaned,
		moaning: moaning,
		moans: moans,
		mock: mock,
		mocked: mocked,
		mocking: mocking,
		mocks: mocks,
		modernize: modernize,
		modernized: modernized,
		modernizes: modernizes,
		modernizing: modernizing,
		mongering: mongering,
		monopolize: monopolize,
		monopolized: monopolized,
		monopolizes: monopolizes,
		monopolizing: monopolizing,
		monotone: monotone,
		moody: moody,
		mope: mope,
		moping: moping,
		moron: moron,
		motherfucker: motherfucker,
		motherfucking: motherfucking,
		motivate: motivate,
		motivated: motivated,
		motivating: motivating,
		motivation: motivation,
		mourn: mourn,
		mourned: mourned,
		mournful: mournful,
		mourning: mourning,
		mourns: mourns,
		muddy: muddy,
		mumpish: mumpish,
		murder: murder,
		murderer: murderer,
		murdering: murdering,
		murderous: murderous,
		murders: murders,
		murky: murky,
		myth: myth,
		n00b: n00b,
		naive: naive,
		narcissism: narcissism,
		nasty: nasty,
		natural: natural,
		"naïve": -2,
		needy: needy,
		negative: negative,
		negativity: negativity,
		neglect: neglect,
		neglected: neglected,
		neglecting: neglecting,
		neglects: neglects,
		nerves: nerves,
		nervous: nervous,
		nervously: nervously,
		nice: nice,
		nifty: nifty,
		niggas: niggas,
		nigger: nigger,
		no: no,
		"no fun": -3,
		noble: noble,
		noblest: noblest,
		noisy: noisy,
		"non-approved": -2,
		nonsense: nonsense,
		noob: noob,
		nosey: nosey,
		"not good": -2,
		"not working": -3,
		notable: notable,
		noticeable: noticeable,
		notorious: notorious,
		novel: novel,
		numb: numb,
		nurturing: nurturing,
		nuts: nuts,
		obliterate: obliterate,
		obliterated: obliterated,
		obnoxious: obnoxious,
		obscene: obscene,
		obscenity: obscenity,
		obsessed: obsessed,
		obsolete: obsolete,
		obstacle: obstacle,
		obstacles: obstacles,
		obstinate: obstinate,
		obstruct: obstruct,
		obstructed: obstructed,
		obstructing: obstructing,
		obstruction: obstruction,
		obstructs: obstructs,
		odd: odd,
		offence: offence,
		offences: offences,
		offend: offend,
		offended: offended,
		offender: offender,
		offending: offending,
		offends: offends,
		offense: offense,
		offenses: offenses,
		offensive: offensive,
		offensively: offensively,
		offline: offline,
		oks: oks,
		ominous: ominous,
		"once-in-a-lifetime": 3,
		oops: oops,
		opportunities: opportunities,
		opportunity: opportunity,
		oppressed: oppressed,
		oppression: oppression,
		oppressions: oppressions,
		oppressive: oppressive,
		optimism: optimism,
		optimistic: optimistic,
		optionless: optionless,
		ostracize: ostracize,
		ostracized: ostracized,
		ostracizes: ostracizes,
		ouch: ouch,
		outage: outage,
		outages: outages,
		outbreak: outbreak,
		outbreaks: outbreaks,
		outcry: outcry,
		outmaneuvered: outmaneuvered,
		outnumbered: outnumbered,
		outrage: outrage,
		outraged: outraged,
		outrageous: outrageous,
		outreach: outreach,
		outstanding: outstanding,
		overjoyed: overjoyed,
		overload: overload,
		overlooked: overlooked,
		overprotective: overprotective,
		overran: overran,
		overreact: overreact,
		overreacted: overreacted,
		overreacting: overreacting,
		overreaction: overreaction,
		overreacts: overreacts,
		oversell: oversell,
		overselling: overselling,
		oversells: oversells,
		oversight: oversight,
		oversimplification: oversimplification,
		oversimplified: oversimplified,
		oversimplifies: oversimplifies,
		oversimplify: oversimplify,
		oversold: oversold,
		overstatement: overstatement,
		overstatements: overstatements,
		overweight: overweight,
		overwrought: overwrought,
		oxymoron: oxymoron,
		pain: pain,
		pained: pained,
		painful: painful,
		panic: panic,
		panicked: panicked,
		panics: panics,
		paradise: paradise,
		paradox: paradox,
		pardon: pardon,
		pardoned: pardoned,
		pardoning: pardoning,
		pardons: pardons,
		parley: parley,
		passion: passion,
		passionate: passionate,
		passive: passive,
		passively: passively,
		pathetic: pathetic,
		pay: pay,
		peace: peace,
		peaceful: peaceful,
		peacefully: peacefully,
		penalize: penalize,
		penalized: penalized,
		penalizes: penalizes,
		penalizing: penalizing,
		penalty: penalty,
		pensive: pensive,
		perfect: perfect,
		perfected: perfected,
		perfection: perfection,
		perfectly: perfectly,
		perfects: perfects,
		peril: peril,
		perjury: perjury,
		perpetrated: perpetrated,
		perpetrator: perpetrator,
		perpetrators: perpetrators,
		perplexed: perplexed,
		persecute: persecute,
		persecuted: persecuted,
		persecutes: persecutes,
		persecuting: persecuting,
		perturbed: perturbed,
		pervert: pervert,
		pesky: pesky,
		pessimism: pessimism,
		pessimistic: pessimistic,
		petrified: petrified,
		philanthropy: philanthropy,
		phobic: phobic,
		picturesque: picturesque,
		pileup: pileup,
		pillage: pillage,
		pique: pique,
		piqued: piqued,
		piss: piss,
		pissed: pissed,
		pissing: pissing,
		piteous: piteous,
		pitied: pitied,
		pity: pity,
		plague: plague,
		plagued: plagued,
		plagues: plagues,
		plaguing: plaguing,
		playful: playful,
		pleasant: pleasant,
		please: please,
		pleased: pleased,
		pleasurable: pleasurable,
		pleasure: pleasure,
		plodding: plodding,
		poignant: poignant,
		pointless: pointless,
		poised: poised,
		poison: poison,
		poisoned: poisoned,
		poisons: poisons,
		polished: polished,
		polite: polite,
		politeness: politeness,
		pollutant: pollutant,
		pollute: pollute,
		polluted: polluted,
		polluter: polluter,
		polluters: polluters,
		pollutes: pollutes,
		pollution: pollution,
		poor: poor,
		poorer: poorer,
		poorest: poorest,
		poorly: poorly,
		popular: popular,
		popularity: popularity,
		positive: positive,
		positively: positively,
		possessive: possessive,
		"post-traumatic": -2,
		postpone: postpone,
		postponed: postponed,
		postpones: postpones,
		postponing: postponing,
		poverty: poverty,
		powerful: powerful,
		powerless: powerless,
		praise: praise,
		praised: praised,
		praises: praises,
		praising: praising,
		pray: pray,
		praying: praying,
		prays: prays,
		prblm: prblm,
		prblms: prblms,
		predatory: predatory,
		prepared: prepared,
		pressure: pressure,
		pressured: pressured,
		pretend: pretend,
		pretending: pretending,
		pretends: pretends,
		pretty: pretty,
		prevent: prevent,
		prevented: prevented,
		preventing: preventing,
		prevents: prevents,
		prick: prick,
		prison: prison,
		prisoner: prisoner,
		prisoners: prisoners,
		privileged: privileged,
		proactive: proactive,
		problem: problem,
		problems: problems,
		profit: profit,
		profitable: profitable,
		profiteer: profiteer,
		profits: profits,
		progress: progress,
		prohibit: prohibit,
		prohibits: prohibits,
		prominent: prominent,
		promise: promise,
		promised: promised,
		promises: promises,
		promote: promote,
		promoted: promoted,
		promotes: promotes,
		promoting: promoting,
		promptly: promptly,
		propaganda: propaganda,
		prosecute: prosecute,
		prosecuted: prosecuted,
		prosecutes: prosecutes,
		prosecution: prosecution,
		prospect: prospect,
		prospects: prospects,
		prosperity: prosperity,
		prosperous: prosperous,
		protect: protect,
		"protected": 1,
		protects: protects,
		protest: protest,
		protesters: protesters,
		protesting: protesting,
		protests: protests,
		proud: proud,
		proudly: proudly,
		provoke: provoke,
		provoked: provoked,
		provokes: provokes,
		provoking: provoking,
		prudence: prudence,
		pseudoscience: pseudoscience,
		psychopathic: psychopathic,
		punish: punish,
		punished: punished,
		punishes: punishes,
		punishing: punishing,
		punitive: punitive,
		pure: pure,
		purest: purest,
		purposeful: purposeful,
		pushy: pushy,
		puzzled: puzzled,
		quaking: quaking,
		qualities: qualities,
		quality: quality,
		questionable: questionable,
		questioned: questioned,
		questioning: questioning,
		racism: racism,
		racist: racist,
		racists: racists,
		rage: rage,
		rageful: rageful,
		rainy: rainy,
		rant: rant,
		ranter: ranter,
		ranters: ranters,
		rants: rants,
		rape: rape,
		raped: raped,
		rapist: rapist,
		rapture: rapture,
		raptured: raptured,
		raptures: raptures,
		rapturous: rapturous,
		rash: rash,
		ratified: ratified,
		reach: reach,
		reached: reached,
		reaches: reaches,
		reaching: reaching,
		reassure: reassure,
		reassured: reassured,
		reassures: reassures,
		reassuring: reassuring,
		rebel: rebel,
		rebellion: rebellion,
		rebels: rebels,
		recession: recession,
		reckless: reckless,
		recognition: recognition,
		recommend: recommend,
		recommended: recommended,
		recommends: recommends,
		redeemed: redeemed,
		refine: refine,
		refined: refined,
		refines: refines,
		refreshingly: refreshingly,
		refuse: refuse,
		refused: refused,
		refuses: refuses,
		refusing: refusing,
		regret: regret,
		regretful: regretful,
		regrets: regrets,
		regretted: regretted,
		regretting: regretting,
		reigning: reigning,
		reject: reject,
		rejected: rejected,
		rejecting: rejecting,
		rejection: rejection,
		rejects: rejects,
		rejoice: rejoice,
		rejoiced: rejoiced,
		rejoices: rejoices,
		rejoicing: rejoicing,
		relaxed: relaxed,
		relentless: relentless,
		reliability: reliability,
		reliable: reliable,
		reliably: reliably,
		reliant: reliant,
		relieve: relieve,
		relieved: relieved,
		relieves: relieves,
		relieving: relieving,
		relishing: relishing,
		remarkable: remarkable,
		remorse: remorse,
		repellent: repellent,
		repercussion: repercussion,
		repercussions: repercussions,
		reprimand: reprimand,
		reprimanded: reprimanded,
		reprimanding: reprimanding,
		reprimands: reprimands,
		repulse: repulse,
		repulsed: repulsed,
		repulsive: repulsive,
		rescue: rescue,
		rescued: rescued,
		rescues: rescues,
		resentful: resentful,
		resign: resign,
		resigned: resigned,
		resigning: resigning,
		resigns: resigns,
		resolute: resolute,
		resolution: resolution,
		resolve: resolve,
		resolved: resolved,
		resolves: resolves,
		resolving: resolving,
		respect: respect,
		respected: respected,
		respects: respects,
		responsibility: responsibility,
		responsible: responsible,
		responsive: responsive,
		restful: restful,
		restless: restless,
		restore: restore,
		restored: restored,
		restores: restores,
		restoring: restoring,
		restrict: restrict,
		restricted: restricted,
		restricting: restricting,
		restriction: restriction,
		restrictive: restrictive,
		restricts: restricts,
		retained: retained,
		retard: retard,
		retarded: retarded,
		retreat: retreat,
		revenge: revenge,
		revengeful: revengeful,
		revered: revered,
		revive: revive,
		revives: revives,
		revolting: revolting,
		reward: reward,
		rewarded: rewarded,
		rewarding: rewarding,
		rewards: rewards,
		rich: rich,
		richly: richly,
		ridiculous: ridiculous,
		rig: rig,
		rigged: rigged,
		"right direction": 3,
		righteousness: righteousness,
		rightful: rightful,
		rightfully: rightfully,
		rigorous: rigorous,
		rigorously: rigorously,
		riot: riot,
		riots: riots,
		rise: rise,
		rises: rises,
		risk: risk,
		risks: risks,
		risky: risky,
		riveting: riveting,
		rob: rob,
		robber: robber,
		robed: robed,
		robing: robing,
		robs: robs,
		robust: robust,
		rofl: rofl,
		roflcopter: roflcopter,
		roflmao: roflmao,
		romance: romance,
		romantical: romantical,
		romantically: romantically,
		rose: rose,
		rotfl: rotfl,
		rotflmfao: rotflmfao,
		rotflol: rotflol,
		rotten: rotten,
		rude: rude,
		ruin: ruin,
		ruined: ruined,
		ruining: ruining,
		ruins: ruins,
		sabotage: sabotage,
		sad: sad,
		sadden: sadden,
		saddened: saddened,
		sadly: sadly,
		safe: safe,
		safely: safely,
		safer: safer,
		safety: safety,
		salient: salient,
		salute: salute,
		saluted: saluted,
		salutes: salutes,
		saluting: saluting,
		salvation: salvation,
		sappy: sappy,
		sarcastic: sarcastic,
		satisfied: satisfied,
		savange: savange,
		savanges: savanges,
		save: save,
		saved: saved,
		savings: savings,
		scam: scam,
		scams: scams,
		scandal: scandal,
		scandalous: scandalous,
		scandals: scandals,
		scapegoat: scapegoat,
		scapegoats: scapegoats,
		scare: scare,
		scared: scared,
		scar: scar,
		scars: scars,
		scary: scary,
		sceptical: sceptical,
		scold: scold,
		scoop: scoop,
		scorn: scorn,
		scornful: scornful,
		scream: scream,
		screamed: screamed,
		screaming: screaming,
		screams: screams,
		screwed: screwed,
		"screwed up": -3,
		scum: scum,
		scumbag: scumbag,
		seamless: seamless,
		seamlessly: seamlessly,
		secure: secure,
		secured: secured,
		secures: secures,
		sedition: sedition,
		seditious: seditious,
		seduced: seduced,
		"self-abuse": -2,
		"self-confident": 2,
		"self-contradictory": -2,
		"self-deluded": -2,
		selfish: selfish,
		selfishness: selfishness,
		sentence: sentence,
		sentenced: sentenced,
		sentences: sentences,
		sentencing: sentencing,
		serene: serene,
		settlement: settlement,
		settlements: settlements,
		severe: severe,
		severely: severely,
		sexist: sexist,
		sexistic: sexistic,
		sexy: sexy,
		shaky: shaky,
		shame: shame,
		shamed: shamed,
		shameful: shameful,
		share: share,
		shared: shared,
		shares: shares,
		shattered: shattered,
		shit: shit,
		shithead: shithead,
		shitty: shitty,
		shock: shock,
		shocked: shocked,
		shocking: shocking,
		shocks: shocks,
		shoody: shoody,
		shoot: shoot,
		"short-sighted": -2,
		"short-sightedness": -2,
		shortage: shortage,
		shortages: shortages,
		shrew: shrew,
		shy: shy,
		sick: sick,
		sickness: sickness,
		"side-effect": -2,
		"side-effects": -2,
		sigh: sigh,
		significance: significance,
		significant: significant,
		silencing: silencing,
		silly: silly,
		simplicity: simplicity,
		sin: sin,
		sincere: sincere,
		sincerely: sincerely,
		sincerest: sincerest,
		sincerity: sincerity,
		sinful: sinful,
		singleminded: singleminded,
		sinister: sinister,
		sins: sins,
		skeptic: skeptic,
		skeptical: skeptical,
		skepticism: skepticism,
		skeptics: skeptics,
		slam: slam,
		slash: slash,
		slashed: slashed,
		slashes: slashes,
		slashing: slashing,
		slave: slave,
		slavery: slavery,
		slaves: slaves,
		sleeplessness: sleeplessness,
		slick: slick,
		slicker: slicker,
		slickest: slickest,
		slip: slip,
		sloppy: sloppy,
		sluggish: sluggish,
		slumping: slumping,
		slut: slut,
		smart: smart,
		smarter: smarter,
		smartest: smartest,
		smear: smear,
		smile: smile,
		smiled: smiled,
		smiles: smiles,
		smiling: smiling,
		smog: smog,
		smuggle: smuggle,
		smuggled: smuggled,
		smuggling: smuggling,
		smuggles: smuggles,
		sneaky: sneaky,
		sneeze: sneeze,
		sneezed: sneezed,
		sneezes: sneezes,
		sneezing: sneezing,
		snub: snub,
		snubbed: snubbed,
		snubbing: snubbing,
		snubs: snubs,
		sobering: sobering,
		solemn: solemn,
		solid: solid,
		solidarity: solidarity,
		solidified: solidified,
		solidifies: solidifies,
		solidify: solidify,
		solidifying: solidifying,
		solution: solution,
		solutions: solutions,
		solve: solve,
		solved: solved,
		solves: solves,
		solving: solving,
		somber: somber,
		"some kind": 0,
		"son-of-a-bitch": -5,
		soothe: soothe,
		soothed: soothed,
		soothing: soothing,
		sophisticated: sophisticated,
		sore: sore,
		sorrow: sorrow,
		sorrowful: sorrowful,
		sorry: sorry,
		spacious: spacious,
		spam: spam,
		spammer: spammer,
		spammers: spammers,
		spamming: spamming,
		spark: spark,
		sparkle: sparkle,
		sparkles: sparkles,
		sparkling: sparkling,
		spearhead: spearhead,
		speculative: speculative,
		spirit: spirit,
		spirited: spirited,
		spiritless: spiritless,
		spiteful: spiteful,
		splendid: splendid,
		spoiled: spoiled,
		spoilt: spoilt,
		spotless: spotless,
		sprightly: sprightly,
		squander: squander,
		squandered: squandered,
		squandering: squandering,
		squanders: squanders,
		squelched: squelched,
		stab: stab,
		stabbed: stabbed,
		stable: stable,
		stabs: stabs,
		stall: stall,
		stalled: stalled,
		stalling: stalling,
		stamina: stamina,
		stampede: stampede,
		stank: stank,
		startled: startled,
		startling: startling,
		starve: starve,
		starved: starved,
		starves: starves,
		starving: starving,
		steadfast: steadfast,
		steal: steal,
		stealing: stealing,
		steals: steals,
		stereotype: stereotype,
		stereotyped: stereotyped,
		stifled: stifled,
		stimulate: stimulate,
		stimulated: stimulated,
		stimulates: stimulates,
		stimulating: stimulating,
		stingy: stingy,
		stink: stink,
		stinked: stinked,
		stinker: stinker,
		stinking: stinking,
		stinks: stinks,
		stinky: stinky,
		stole: stole,
		stolen: stolen,
		stop: stop,
		stopped: stopped,
		stopping: stopping,
		stops: stops,
		stout: stout,
		straight: straight,
		strange: strange,
		strangely: strangely,
		strangled: strangled,
		strength: strength,
		strengthen: strengthen,
		strengthened: strengthened,
		strengthening: strengthening,
		strengthens: strengthens,
		strengths: strengths,
		stress: stress,
		stressed: stressed,
		stressor: stressor,
		stressors: stressors,
		stricken: stricken,
		strike: strike,
		strikers: strikers,
		strikes: strikes,
		strong: strong,
		stronger: stronger,
		strongest: strongest,
		struck: struck,
		struggle: struggle,
		struggled: struggled,
		struggles: struggles,
		struggling: struggling,
		stubborn: stubborn,
		stuck: stuck,
		stunned: stunned,
		stunning: stunning,
		stupid: stupid,
		stupidity: stupidity,
		stupidly: stupidly,
		suave: suave,
		subpoena: subpoena,
		substantial: substantial,
		substantially: substantially,
		subversive: subversive,
		succeed: succeed,
		succeeded: succeeded,
		succeeding: succeeding,
		succeeds: succeeds,
		success: success,
		successful: successful,
		successfully: successfully,
		suck: suck,
		sucks: sucks,
		sue: sue,
		sued: sued,
		sueing: sueing,
		sues: sues,
		suffer: suffer,
		suffered: suffered,
		sufferer: sufferer,
		sufferers: sufferers,
		suffering: suffering,
		suffers: suffers,
		suicidal: suicidal,
		suicide: suicide,
		suicides: suicides,
		suing: suing,
		suitable: suitable,
		suited: suited,
		sulking: sulking,
		sulky: sulky,
		sullen: sullen,
		sunshine: sunshine,
		"super": 3,
		superb: superb,
		superior: superior,
		support: support,
		supported: supported,
		supporter: supporter,
		supporters: supporters,
		supporting: supporting,
		supportive: supportive,
		supports: supports,
		supreme: supreme,
		survived: survived,
		surviving: surviving,
		survivor: survivor,
		suspect: suspect,
		suspected: suspected,
		suspecting: suspecting,
		suspects: suspects,
		suspend: suspend,
		suspended: suspended,
		suspicious: suspicious,
		sustainability: sustainability,
		sustainable: sustainable,
		sustainably: sustainably,
		swear: swear,
		swearing: swearing,
		swears: swears,
		sweet: sweet,
		sweeter: sweeter,
		sweetest: sweetest,
		swift: swift,
		swiftly: swiftly,
		swindle: swindle,
		swindles: swindles,
		swindling: swindling,
		sympathetic: sympathetic,
		sympathy: sympathy,
		taint: taint,
		tainted: tainted,
		talent: talent,
		tard: tard,
		tarnish: tarnish,
		tarnished: tarnished,
		tarnishes: tarnishes,
		tears: tears,
		tender: tender,
		tenderness: tenderness,
		tense: tense,
		tension: tension,
		terrible: terrible,
		terribly: terribly,
		terrific: terrific,
		terrifically: terrifically,
		terrified: terrified,
		terror: terror,
		terrorist: terrorist,
		terrorists: terrorists,
		terrorize: terrorize,
		terrorized: terrorized,
		terrorizes: terrorizes,
		thank: thank,
		thankful: thankful,
		thanks: thanks,
		thorny: thorny,
		thoughtful: thoughtful,
		thoughtless: thoughtless,
		threat: threat,
		threaten: threaten,
		threatened: threatened,
		threatening: threatening,
		threatens: threatens,
		threats: threats,
		thrilled: thrilled,
		thwart: thwart,
		thwarted: thwarted,
		thwarting: thwarting,
		thwarts: thwarts,
		timid: timid,
		timorous: timorous,
		tired: tired,
		tits: tits,
		tolerance: tolerance,
		tolerant: tolerant,
		toothless: toothless,
		top: top,
		tops: tops,
		torn: torn,
		torture: torture,
		tortured: tortured,
		tortures: tortures,
		torturing: torturing,
		totalitarian: totalitarian,
		totalitarianism: totalitarianism,
		tout: tout,
		touted: touted,
		touting: touting,
		touts: touts,
		toxic: toxic,
		tragedies: tragedies,
		tragedy: tragedy,
		tragic: tragic,
		tranquil: tranquil,
		transgress: transgress,
		transgressed: transgressed,
		transgresses: transgresses,
		transgressing: transgressing,
		trap: trap,
		trapped: trapped,
		traps: traps,
		trauma: trauma,
		traumatic: traumatic,
		travesty: travesty,
		treason: treason,
		treasonous: treasonous,
		treasure: treasure,
		treasures: treasures,
		trembling: trembling,
		tremor: tremor,
		tremors: tremors,
		tremulous: tremulous,
		tribulation: tribulation,
		tribute: tribute,
		tricked: tricked,
		trickery: trickery,
		triumph: triumph,
		triumphant: triumphant,
		troll: troll,
		trouble: trouble,
		troubled: troubled,
		troubles: troubles,
		troubling: troubling,
		"true": 2,
		trust: trust,
		trusted: trusted,
		trusts: trusts,
		tumor: tumor,
		twat: twat,
		tyran: tyran,
		tyrannic: tyrannic,
		tyrannical: tyrannical,
		tyrannically: tyrannically,
		tyrans: tyrans,
		ubiquitous: ubiquitous,
		ugh: ugh,
		ugliness: ugliness,
		ugly: ugly,
		unable: unable,
		unacceptable: unacceptable,
		unappeasable: unappeasable,
		unappreciated: unappreciated,
		unapproved: unapproved,
		unattractive: unattractive,
		unavailable: unavailable,
		unavailing: unavailing,
		unaware: unaware,
		unbearable: unbearable,
		unbelievable: unbelievable,
		unbelieving: unbelieving,
		unbiased: unbiased,
		uncertain: uncertain,
		unclear: unclear,
		uncomfortable: uncomfortable,
		unconcerned: unconcerned,
		unconfirmed: unconfirmed,
		unconvinced: unconvinced,
		uncredited: uncredited,
		undecided: undecided,
		undercooked: undercooked,
		underestimate: underestimate,
		underestimated: underestimated,
		underestimates: underestimates,
		underestimating: underestimating,
		undermine: undermine,
		undermined: undermined,
		undermines: undermines,
		undermining: undermining,
		underperform: underperform,
		underperformed: underperformed,
		underperforming: underperforming,
		underperforms: underperforms,
		undeserving: undeserving,
		undesirable: undesirable,
		uneasy: uneasy,
		unemployed: unemployed,
		unemployment: unemployment,
		unequal: unequal,
		unequaled: unequaled,
		unethical: unethical,
		uneventful: uneventful,
		unfair: unfair,
		unfavorable: unfavorable,
		unfit: unfit,
		unfitted: unfitted,
		unfocused: unfocused,
		unforgivable: unforgivable,
		unforgiving: unforgiving,
		unfulfilled: unfulfilled,
		unfunny: unfunny,
		ungenerous: ungenerous,
		ungrateful: ungrateful,
		unhappy: unhappy,
		unhappiness: unhappiness,
		unhealthy: unhealthy,
		unhygienic: unhygienic,
		unified: unified,
		unimaginative: unimaginative,
		unimpressed: unimpressed,
		uninspired: uninspired,
		unintelligent: unintelligent,
		unintentional: unintentional,
		uninvolving: uninvolving,
		united: united,
		unjust: unjust,
		unlikely: unlikely,
		unlovable: unlovable,
		unloved: unloved,
		unmatched: unmatched,
		unmotivated: unmotivated,
		unoriginal: unoriginal,
		unparliamentary: unparliamentary,
		unpleasant: unpleasant,
		unpleasantness: unpleasantness,
		unprofessional: unprofessional,
		unravel: unravel,
		unreleting: unreleting,
		unresearched: unresearched,
		unsafe: unsafe,
		unsatisfied: unsatisfied,
		unscientific: unscientific,
		unsecured: unsecured,
		unselfish: unselfish,
		unsettled: unsettled,
		unsold: unsold,
		unsophisticated: unsophisticated,
		unsound: unsound,
		unstable: unstable,
		unstoppable: unstoppable,
		unsuccessful: unsuccessful,
		unsuccessfully: unsuccessfully,
		unsupported: unsupported,
		unsure: unsure,
		untarnished: untarnished,
		untrue: untrue,
		unwanted: unwanted,
		unworthy: unworthy,
		uplifting: uplifting,
		uproar: uproar,
		upset: upset,
		upsets: upsets,
		upsetting: upsetting,
		uptight: uptight,
		urgent: urgent,
		useful: useful,
		usefulness: usefulness,
		useless: useless,
		uselessness: uselessness,
		vague: vague,
		validate: validate,
		validated: validated,
		validates: validates,
		validating: validating,
		vapid: vapid,
		verdict: verdict,
		verdicts: verdicts,
		vested: vested,
		vexation: vexation,
		vexing: vexing,
		vibrant: vibrant,
		vicious: vicious,
		victim: victim,
		victimization: victimization,
		victimize: victimize,
		victimized: victimized,
		victimizes: victimizes,
		victimizing: victimizing,
		victims: victims,
		victor: victor,
		victors: victors,
		victory: victory,
		victories: victories,
		vigilant: vigilant,
		vigor: vigor,
		vile: vile,
		vindicate: vindicate,
		vindicated: vindicated,
		vindicates: vindicates,
		vindicating: vindicating,
		violate: violate,
		violated: violated,
		violates: violates,
		violating: violating,
		violation: violation,
		violations: violations,
		violence: violence,
		"violence-related": -3,
		violent: violent,
		violently: violently,
		virtuous: virtuous,
		virulent: virulent,
		vision: vision,
		visionary: visionary,
		visioning: visioning,
		visions: visions,
		vitality: vitality,
		vitamin: vitamin,
		vitriolic: vitriolic,
		vivacious: vivacious,
		vividly: vividly,
		vociferous: vociferous,
		vomit: vomit,
		vomited: vomited,
		vomiting: vomiting,
		vomits: vomits,
		vulnerability: vulnerability,
		vulnerable: vulnerable,
		walkout: walkout,
		walkouts: walkouts,
		wanker: wanker,
		want: want,
		war: war,
		warfare: warfare,
		warm: warm,
		warmhearted: warmhearted,
		warmness: warmness,
		warmth: warmth,
		warn: warn,
		warned: warned,
		warning: warning,
		warnings: warnings,
		warns: warns,
		waste: waste,
		wasted: wasted,
		wasting: wasting,
		wavering: wavering,
		weak: weak,
		weakened: weakened,
		weakness: weakness,
		weaknesses: weaknesses,
		wealth: wealth,
		wealthier: wealthier,
		wealthy: wealthy,
		weary: weary,
		weep: weep,
		weeping: weeping,
		weird: weird,
		welcome: welcome,
		welcomed: welcomed,
		welcomes: welcomes,
		"well-being": 2,
		"well-championed": 3,
		"well-developed": 2,
		"well-established": 2,
		"well-focused": 2,
		"well-groomed": 2,
		"well-proportioned": 2,
		whimsical: whimsical,
		whitewash: whitewash,
		whore: whore,
		wicked: wicked,
		widowed: widowed,
		willingness: willingness,
		win: win,
		winner: winner,
		winning: winning,
		wins: wins,
		winwin: winwin,
		wisdom: wisdom,
		wish: wish,
		wishes: wishes,
		wishing: wishing,
		withdrawal: withdrawal,
		wits: wits,
		woebegone: woebegone,
		woeful: woeful,
		won: won,
		wonderful: wonderful,
		wonderfully: wonderfully,
		woo: woo,
		woohoo: woohoo,
		wooo: wooo,
		woow: woow,
		worn: worn,
		worried: worried,
		worries: worries,
		worry: worry,
		worrying: worrying,
		worse: worse,
		worsen: worsen,
		worsened: worsened,
		worsening: worsening,
		worsens: worsens,
		worshiped: worshiped,
		worst: worst,
		worth: worth,
		worthless: worthless,
		worthy: worthy,
		wow: wow,
		wowow: wowow,
		wowww: wowww,
		wrathful: wrathful,
		wreck: wreck,
		wrenching: wrenching,
		wrong: wrong,
		wrongdoing: wrongdoing,
		wrongdoings: wrongdoings,
		wronged: wronged,
		wrongful: wrongful,
		wrongfully: wrongfully,
		wrongly: wrongly,
		wtf: wtf,
		wtff: wtff,
		wtfff: wtfff,
		xo: xo,
		xoxo: xoxo,
		xoxoxo: xoxoxo,
		xoxoxoxo: xoxoxoxo,
		yeah: yeah,
		yearning: yearning,
		yeees: yeees,
		yes: yes,
		youthful: youthful,
		yucky: yucky,
		yummy: yummy,
		zealot: zealot,
		zealots: zealots,
		zealous: zealous
	};

	var cant = 1;
	var dont = 1;
	var doesnt = 1;
	var not = 1;
	var non = 1;
	var wont = 1;
	var isnt = 1;
	var require$$0 = {
		cant: cant,
		"can't": 1,
		dont: dont,
		"don't": 1,
		doesnt: doesnt,
		"doesn't": 1,
		not: not,
		non: non,
		wont: wont,
		"won't": 1,
		isnt: isnt,
		"isn't": 1
	};

	var negators = require$$0;

	var scoringStrategy = {
	    apply: function(tokens, cursor, tokenScore) {
	        if (cursor > 0) {
	            var prevtoken = tokens[cursor - 1];
	            if (negators[prevtoken]) {
	                tokenScore = -tokenScore;
	            }
	        }
	        return tokenScore;
	    }
	};

	var en = {
	    labels: require$$0$1,
	    scoringStrategy: scoringStrategy
	};

	var emojis = require$$0$2;

	// English is loaded by default
	var enLanguage = en;
	// Add emojis
	Object.assign(enLanguage.labels, emojis);

	// Cache loaded languages
	var languages = {
	    en: enLanguage
	};

	var languageProcessor$1 = {

	    /**
	     * Registers the specified language
	     *
	     * @param {String} languageCode
	     *     - Two-digit code for the language to register
	     * @param {Object} language
	     *     - The language module to register
	     */
	    addLanguage: function (languageCode, language) {
	        if (!language.labels) {
	            throw new Error('language.labels must be defined!');
	        }
	        // Add emojis
	        Object.assign(language.labels, emojis);
	        languages[languageCode] = language;
	    },

	    /**
	     * Retrieves a language object from the cache,
	     * or tries to load it from the set of supported languages
	     *
	     * @param {String} languageCode - Two-digit code for the language to fetch
	     */
	    getLanguage: function(languageCode) {
	        if (!languageCode) {
	            // Default to english if no language was specified
	            return languages.en;
	        }
	        if (!languages[languageCode]) {
	            // Try to load specified language
	            try {
	                // eslint-disable-next-line max-len
	                var language = commonjsRequire('../languages/' + languageCode + '/index');
	                // Add language to in-memory cache
	                this.addLanguage(languageCode, language);
	            } catch (err) {
	                throw new Error('No language found: ' + languageCode);
	            }
	        }
	        return languages[languageCode];
	    },

	    /**
	     * Returns AFINN-165 weighted labels for the specified language
	     *
	     * @param {String} languageCode - Two-digit language code
	     * @return {Object}
	     */
	    getLabels: function(languageCode) {
	        var language = this.getLanguage(languageCode);
	        return language.labels;
	    },

	    /**
	     * Applies a scoring strategy for the current token
	     *
	     * @param {String} languageCode - Two-digit language code
	     * @param {Array} tokens - Tokens of the phrase to analyze
	     * @param {int} cursor - Cursor of the current token being analyzed
	     * @param {int} tokenScore - The score of the current token being analyzed
	     */
	    applyScoringStrategy: function(languageCode, tokens, cursor, tokenScore) {
	        var language = this.getLanguage(languageCode);
	        // Fallback to default strategy if none was specified
	        // eslint-disable-next-line max-len
	        var scoringStrategy = language.scoringStrategy || defaultScoringStrategy;
	        return scoringStrategy.apply(tokens, cursor, tokenScore);
	    }
	};

	var defaultScoringStrategy = {
	    apply: function(tokens, cursor, tokenScore) {
	        return tokenScore;
	    }
	};

	var tokenize = tokenize$1;
	var languageProcessor = languageProcessor$1;

	/**
	 * Constructor
	 * @param {Object} options - Instance options
	 */
	var Sentiment = function (options) {
	    this.options = options;
	};

	/**
	 * Registers the specified language
	 *
	 * @param {String} languageCode
	 *     - Two-digit code for the language to register
	 * @param {Object} language
	 *     - The language module to register
	 */
	Sentiment.prototype.registerLanguage = function (languageCode, language) {
	    languageProcessor.addLanguage(languageCode, language);
	};

	/**
	 * Performs sentiment analysis on the provided input 'phrase'.
	 *
	 * @param {String} phrase
	 *     - Input phrase
	 * @param {Object} opts
	 *     - Options
	 * @param {Object} opts.language
	 *     - Input language code (2 digit code), defaults to 'en'
	 * @param {Object} opts.extras
	 *     - Optional sentiment additions to AFINN (hash k/v pairs)
	 * @param {function} callback
	 *     - Optional callback
	 * @return {Object}
	 */
	Sentiment.prototype.analyze = function (phrase, opts, callback) {
	    // Parse arguments
	    if (typeof phrase === 'undefined') phrase = '';
	    if (typeof opts === 'function') {
	        callback = opts;
	        opts = {};
	    }
	    opts = opts || {};

	    var languageCode = opts.language || 'en';
	    var labels = languageProcessor.getLabels(languageCode);

	    // Merge extra labels
	    if (typeof opts.extras === 'object') {
	        labels = Object.assign(labels, opts.extras);
	    }

	    // Storage objects
	    var tokens      = tokenize(phrase),
	        score       = 0,
	        words       = [],
	        positive    = [],
	        negative    = [],
	        calculation = [];

	    // Iterate over tokens
	    var i = tokens.length;
	    while (i--) {
	        var obj = tokens[i];
	        if (!labels.hasOwnProperty(obj)) continue;
	        words.push(obj);

	        // Apply scoring strategy
	        var tokenScore = labels[obj];
	        // eslint-disable-next-line max-len
	        tokenScore = languageProcessor.applyScoringStrategy(languageCode, tokens, i, tokenScore);
	        if (tokenScore > 0) positive.push(obj);
	        if (tokenScore < 0) negative.push(obj);
	        score += tokenScore;
	        
	        var zipObj = {}; 
	        // Calculations breakdown
	        zipObj[obj] = tokenScore;
	        calculation.push(zipObj);
	    }

	    var result = {
	        score:          score,
	        comparative:    tokens.length > 0 ? score / tokens.length : 0,
	        calculation:    calculation,
	        tokens:         tokens,
	        words:          words,
	        positive:       positive,
	        negative:       negative
	    };

	    // Handle optional async interface
	    if (typeof callback === 'function') {
	        process.nextTick(function () {
	            callback(null, result);
	        });
	    } else {
	        return result;
	    }
	};

	var lib = Sentiment;

	var Sentiment$1 = /*@__PURE__*/getDefaultExportFromCjs(lib);

	window.sentiment = new Sentiment$1();
	const result = sentiment.analyze('I love this!');
	console.log(result);

})();
