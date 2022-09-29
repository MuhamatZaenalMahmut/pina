
import { sample } from "@constants/apiSample";
import { showToast } from "@constants";
import { Sample } from '@actions';
import store from "@stores/store";

class SampleUtils {

    async sample(params) {
        return params = await sample(params).then((response) => {
        
            const respon = response.data
            if(respon.cod == 200){
                return store.dispatch(Sample(respon))
            } else {
                return showToast(respon.message)
            }
        }).catch((error) => {
            return showToast('Data request failed')
        })
    }
}

const sampleUtils = new SampleUtils()

Object.freeze(sampleUtils)

export default sampleUtils