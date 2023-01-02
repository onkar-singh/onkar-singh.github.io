let st = new Localbase('st');

for (let i = 701; i <= 1070; i++) {
    (async()=>{
        await st.collection('ods').doc('od'+i).delete()
            .then(res=>{console.log(res,`Deleted od${i}`)})
            .catch(err=>{console.log(err,`Error in od${i}`)})
    })();
}
