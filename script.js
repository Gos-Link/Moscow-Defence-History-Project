var SECS = [
    ["home", "Главная"],
    ["timeline", "Хронология"],
    ["militia", "Ополчение"],
    ["lines", "Карта"],
    ["partisans", "Партизаны"],
    ["archive", "Архив"]
];

var EV = [
    ["30 сентября – 2 октября 1941", "Начало наступления на Москву", "Группа армий «Центр» начала операцию «Тайфун». В первые недели были окружены советские войска под Вязьмой и Брянском."],
    ["10 октября", "Жуков во главе Западного фронта", "Командующим фронтом назначен Г. К. Жуков. Оборона строилась на Можайской линии."],
    ["19 октября", "Осадное положение в Москве", "Государственный комитет обороны ввёл в городе осадное положение: комендантский час, строгий порядок."],
    ["24 октября", "Начало обороны Тулы", "Тула удерживалась до начала декабря и не дала врагу обойти Москву с юга. В 1976 году городу присвоено звание «Город-герой»."],
    ["7 ноября", "Парад на Красной площади", "Войска прошли по площади и сразу уходили на фронт."],
    ["15–16 ноября", "Второй этап наступления врага", "Бои на Волоколамском и Клинском направлениях, в районе Дубосеково."],
    ["5–6 декабря", "Контрнаступление", "Войска Калининского и Западного фронтов перешли в контрнаступление и отбросили врага от столицы."],
    ["11–15 декабря", "Освобождены Истра и Клин", "Враг отступал, разрушая города и сёла."],
    ["Январь – апрель 1942", "Завершение Битвы за Москву", "Бои продолжались до 20 апреля 1942 года. Угроза Москве была ликвидирована."]
];

var PL = [
    ["Москва", 272, 146, 9, 4, "start", "city", "Москва", "Столица. Осадное положение, зона обороны вокруг города, парад 7 ноября. Отсюда на фронт уходили ополченцы и резервы."],
    ["Клин", 229, 112, -7, 4, "end", "city", "Клин", "Северо-западное направление. В ноябре здесь шли тяжёлые бои, город был оккупирован, а 15 декабря 1941 года освобождён."],
    ["Калинин", 215, 80, -6, -6, "end", "city", "Калинин (Тверь)", "В 1931–1990 годах Тверь называлась Калинин. Город был оставлен врагу в середине октября 1941 года, освобождён 16 декабря. Здесь действовал Калининский фронт."],
    ["Можайск", 150, 142, -7, 4, "end", "city", "Можайск", "Центр Можайской линии обороны. Город оказался в руках врага в октябре, освобождён в январе 1942 года."],
    ["Тула", 290, 288, 8, 4, "start", "city", "Тула", "Оборона города с 24 октября по 5 декабря 1941 года сорвала планы врага обойти Москву с юга."],
    ["Дубосеково", 205, 160, -8, 4, "end", "red", "Дубосеково", "Разъезд Дубосеково, 16 ноября 1941 года. Бои 316-й стрелковой дивизии генерала Панфилова на Волоколамском направлении."],
    ["Петрищево", 222, 190, 8, 4, "start", "red", "Петрищево", "Деревня Петрищево. Здесь 29 ноября 1941 года была казнена Зоя Космодемьянская, участница диверсионной группы."],
    ["Ильинский рубеж", 232, 220, 8, 4, "start", "red", "Ильинский рубеж", "Подольские курсанты 5–16 октября 1941 года удерживали Ильинские рубежи на Варшавском шоссе и выиграли время для подготовки обороны Москвы."],
    ["Десант Старчака", 172, 228, -8, 4, "end", "red", "Десант Старчака", "Воздушные десантники майора Старчака в октябре 1941 года вступили в бой с наступающими частями врага."],
    ["Мценск", 268, 368, 8, 4, "start", "red", "Мценск", "Под Мценском 4–11 октября 1941 года 4-я танковая бригада Катукова остановила наступление немецких танков."],
    ["Андреаполь", 82, 70, 0, -8, "middle", "plain"],
    ["Ржев", 148, 92, -7, 4, "end", "plain"],
    ["Владимир", 388, 124, 0, -8, "middle", "plain"],
    ["Вязьма", 103, 188, -7, 4, "end", "plain"],
    ["Смоленск", 42, 226, 0, -8, "middle", "plain"],
    ["Рославль", 62, 286, -7, 4, "end", "plain"],
    ["Калуга", 215, 248, 8, 4, "start", "plain"],
    ["Рязань", 372, 208, 0, 14, "middle", "plain"],
    ["Брянск", 128, 342, -7, 4, "end", "plain"],
    ["Орёл", 205, 388, -7, 4, "end", "plain"],
    ["Унеча", 55, 408, 8, 4, "start", "plain"],
    ["Курск", 215, 452, 8, 4, "start", "plain"],
    ["Елец", 298, 418, 8, 4, "start", "plain"],
    ["Шостка", 68, 458, 8, 4, "start", "plain"],
    ["Воронеж", 330, 482, 0, -8, "middle", "plain"]
];

var B = ["#8fb4e0", "#3a5f9c"];
var R = ["#B22222", "#7a1414"];

var AR = [
    [40, 238, 150, 152, 14].concat(B),
    [70, 300, 200, 246, 12].concat(B),
    [70, 215, 100, 100, 9].concat(B),
    [95, 452, 122, 352, 14].concat(B),
    [100, 440, 210, 392, 12].concat(B),
    [210, 388, 284, 298, 12].concat(B),
    [228, 400, 268, 376, 8].concat(B),
    [158, 108, 206, 84, 8].concat(B),
    [155, 48, 172, 72, 10].concat(R),
    [272, 108, 242, 120, 10].concat(R),
    [306, 198, 264, 196, 10].concat(R),
    [310, 240, 270, 262, 10].concat(R),
    [246, 300, 256, 334, 8].concat(R),
    [96, 125, 62, 138, 9].concat(R),
    [92, 225, 58, 214, 9].concat(R)
];

var NS = "http://www.w3.org/2000/svg";

function mk(tag, attrs) {
    var el = document.createElementNS(NS, tag);
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
    return el;
}

var menu = document.getElementById("menu");
var bg = document.getElementById("bg");

function toggleMenu(open) {
    menu.classList.toggle("on", open);
    bg.setAttribute("aria-expanded", open);
}

bg.onclick = function () {
    toggleMenu(true);
};

document.getElementById("x").onclick = function () {
    toggleMenu(false);
};

SECS.forEach(function (s) {
    var button = document.createElement("button");
    button.textContent = s[1];
    button.dataset.id = s[0];
    button.onclick = function () {
        location.hash = s[0];
        toggleMenu(false);
    };
    menu.appendChild(button);
});

function go(id) {
    if (!document.getElementById(id)) {
        id = "home";
    }
    SECS.forEach(function (s) {
        document.getElementById(s[0]).classList.toggle("on", s[0] === id);
    });
    [].forEach.call(menu.querySelectorAll("[data-id]"), function (button) {
        button.classList.toggle("cur", button.dataset.id === id);
    });
    window.scrollTo(0, 0);
}

var tl = document.getElementById("tl");

EV.forEach(function (e) {
    var li = document.createElement("li");
    li.innerHTML = '<button aria-expanded="false"><span class="tag"></span><div class="t"></div><div class="x"></div></button>';
    li.querySelector(".tag").textContent = e[0];
    li.querySelector(".t").textContent = e[1];
    li.querySelector(".x").textContent = e[2];
    li.querySelector("button").onclick = function () {
        var opened = li.classList.toggle("open");
        this.setAttribute("aria-expanded", opened);
    };
    tl.appendChild(li);
});

var arrows = document.getElementById("ar");

AR.forEach(function (a) {
    var dx = a[2] - a[0];
    var dy = a[3] - a[1];
    var len = Math.hypot(dx, dy);
    var ux = dx / len;
    var uy = dy / len;
    var nx = -uy;
    var ny = ux;
    var w = a[4];
    var headLen = w * 1.7;
    var headW = w * 1.05;
    var bx = a[2] - ux * headLen;
    var by = a[3] - uy * headLen;

    var points = [
        [a[0] + nx * w / 2, a[1] + ny * w / 2],
        [bx + nx * w / 2, by + ny * w / 2],
        [bx + nx * headW, by + ny * headW],
        [a[2], a[3]],
        [bx - nx * headW, by - ny * headW],
        [bx - nx * w / 2, by - ny * w / 2],
        [a[0] - nx * w / 2, a[1] - ny * w / 2]
    ];

    arrows.appendChild(mk("polygon", {
        points: points.map(function (q) {
            return q[0].toFixed(1) + "," + q[1].toFixed(1);
        }).join(" "),
        fill: a[5],
        stroke: a[6],
        "stroke-width": 1.2,
        "stroke-linejoin": "round",
        opacity: .92
    }));
});

var nodes = document.getElementById("nodes");
var chips = document.getElementById("chips");
var info = document.getElementById("info");
var SEL = [];

function pick(i) {
    var p = PL[i];
    info.innerHTML = "";

    var tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = p[6] === "red" ? "Место подвига" : "Место на карте";

    var title = document.createElement("h3");
    title.textContent = p[7];

    var text = document.createElement("p");
    text.textContent = p[8];

    info.appendChild(tag);
    info.appendChild(title);
    info.appendChild(text);

    SEL.forEach(function (s) {
        var active = s.i === i;
        s.g.classList.toggle("sel", active);
        s.c.setAttribute("aria-pressed", active ? "true" : "false");
    });
}

PL.forEach(function (p, i) {
    var g = mk("g", { "class": "n" });
    var selectable = p[6] !== "plain";
    var radius = p[6] === "red" ? 6 : (i === 0 ? 7 : (selectable ? 5 : 3));
    var fill = p[6] === "red" ? "#B22222" : (i === 0 ? "#9E2A2B" : "#fff");

    g.appendChild(mk("circle", {
        cx: p[1],
        cy: p[2],
        r: radius,
        fill: fill,
        stroke: p[6] === "red" ? "#fff" : "#1E1E1E",
        "stroke-width": p[6] === "red" ? 2 : 1.8
    }));

    var label = mk("text", {
        x: p[1] + p[3],
        y: p[2] + p[4],
        "text-anchor": p[5]
    });
    label.textContent = p[0];
    if (i === 0) {
        label.setAttribute("style", "font-size:14px");
    }
    g.appendChild(label);

    if (selectable) {
        g.setAttribute("tabindex", "0");
        g.setAttribute("role", "button");
        g.setAttribute("aria-label", p[0]);
        g.onclick = function () {
            pick(i);
        };
        g.onkeydown = function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                pick(i);
            }
        };

        var chip = document.createElement("button");
        chip.textContent = p[0];
        chip.onclick = function () {
            pick(i);
        };
        chips.appendChild(chip);

        SEL.push({ i: i, g: g, c: chip });
    } else {
        g.style.cursor = "default";
        g.style.pointerEvents = "none";
    }

    nodes.appendChild(g);
});

pick(0);
go((location.hash || "#home").slice(1));

window.addEventListener("hashchange", function () {
    go(location.hash.slice(1));
});
/* Code by Neuron [Gos-Link]
