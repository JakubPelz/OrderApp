"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var client_1 = require("../controllers/client");
var routes = function (router) {
    router.get('/zakaznik', client_1.GetClient);
    router.post('/novy-zakaznik', client_1.postClient);
    router.get('/zbozi', client_1.GetProducts);
};
exports.routes = routes;
