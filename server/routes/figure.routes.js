const FigureController = require("../controllers/figure.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = (app) =>{
    app.post("/api/figures", authenticate, FigureController.createFigure);//works
    app.get('/api/figures', FigureController.getAllFigures);//works
    app.get('/api/figures/:id', FigureController.getOneFigure);//works
    app.put("/api/figures/:id", authenticate, FigureController.updateFigure);//works
    app.delete('/api/figures/:id', authenticate, FigureController.deleteFigure);//works
   // app.get("/api/figures/:username", authenticate, FigureController.findAllFiguresByUser);
    //new  might need :category
    //app.get('/api/figures/categories', FigureController.getAllFigures);


};