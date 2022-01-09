"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProducts = exports.GetClient = exports.postClient = void 0;
var Product = [
    {
        title: 'Světelný meč - modrý',
        color: 'Modrá barva',
        properities: 'Jednoruční',
        image: 'https://ae01.alicdn.com/kf/H349249c4521f4b47a0685178968e2fc2o/Cosplay-Lightsaber-with-Light-Sound-Led-Red-Green-Blue-Saber-laser-Metal-Sword-Toys-Birthday-Star.jpg',
        price: 269,
    },
    {
        title: 'Světelný meč - červený',
        color: 'Červená barva',
        properities: 'Jednoruční',
        image: 'https://www.bestdarky.cz/images_cache/w320h320/2/C/D/6caf977ec434a4c47a41be60f420b206.jpg',
        price: 358,
    },
    {
        title: 'Obouruční meč',
        color: 'Barva modrá',
        properities: 'Obouruční',
        image: 'https://m.media-amazon.com/images/I/51oQ7YsJ7nL._AC_SL1200_.jpg',
        price: 895,
    },
];
var postClient = function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); };
exports.postClient = postClient;
var GetClient = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log('Client');
        return [2 /*return*/];
    });
}); };
exports.GetClient = GetClient;
var GetProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        try {
            products = Product;
            res.send(products);
        }
        catch (_b) {
            res.status(404);
            res.send({ error: 'Products not exists.' });
        }
        return [2 /*return*/];
    });
}); };
exports.GetProducts = GetProducts;
