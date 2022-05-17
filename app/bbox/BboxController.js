import axios from 'axios';

export default class BboxControler {
    bBoxOne(req, res) {
        //TODO: llamar al servicio de bbox puerto 9000
        axios.get('http://127.0.0.1:9090/')
      res.send("bbox-one");
    }

    bBoxTwo(req, res) {
        //TODO: llamar al servicio de bbox puerto 9001
        axios.get('http://127.0.0.1:9091/')
        res.send("bbox-two");
    }
}
