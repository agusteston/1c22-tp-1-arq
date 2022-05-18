import axios from 'axios';

export default class BboxControler {
    bBoxOne(req, res) {
        //TODO: llamar al servicio de bbox puerto 9000
        axios.get('http://bbox:9090/').then(response => {
            res.send(response.data);
        }).catch(error => { 
            res.send(error);
        });
    //   res.send("bbox-one");
    }

    bBoxTwo(req, res) {
        //TODO: llamar al servicio de bbox puerto 9001
        axios.get('http://bbox:9091/').then(response => {
            res.send(response.data);
        }).catch(error => {
            res.send(error);
        });
        // res.send("bbox-two");
    }
}
