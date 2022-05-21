import IntensiveAlgorithmService from "./IntensiveAlgorithmService.js";

export default class IntensiveAlgorithmController {
    constructor() {
        this.algorithmService = new IntensiveAlgorithmService(); 
    }

    getCalculation(req, res) {
        let baseNumber = req.query.number;
        res.send({"result": this.algorithmService.doAlgorithm(baseNumber)})
    }
}