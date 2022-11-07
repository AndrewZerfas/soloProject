const FigureController = require("../controllers/figure.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = (app) =>{
    app.post("/api/figures", authenticate, FigureController.createFigure);
    app.get('/api/figures', FigureController.getAllFigures);
    app.get('/api/figures/:id', FigureController.getOneFigure);
    app.put("/api/figures/:id", authenticate, FigureController.updateFigure);
    app.delete('/api/figures/:id', authenticate, FigureController.deleteFigure);
    app.get('/api/figures/category/:category', FigureController.getCategory);
};