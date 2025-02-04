export default class IntensiveAlgorithmService {
    doAlgorithm(baseNumber) {
        let result = 0;	
        for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
            result += Math.atan(i) * Math.tan(i);
        };
        return result;
    }
}