const Pengukuran = require('./model');

module.exports = {
    index: async(req, res) => {
        try {
            const pengukuran = await Pengukuran.find();
            res.render('dashboard/view_dashboard',{pengukuran});
        } catch (error) {
            console.log(error.message);
        }
    },
    viewCreate : async (req,res) =>{
        try{
            res.render('dashboard/create');
        }
        catch(error){
            console.log(error.message)
        }
    },
    actionCreate: async(req, res) =>{
        try{
            const {namaTempat,deskripsi,latitude,longitude,SNR,CNR,BER,pathLoss} = req.body;
            const pengukuran = await Pengukuran.create({
                namaTempat: namaTempat,
                deskripsi: deskripsi,
                latitude: latitude,
                longitude: longitude,
                SNR:SNR,
                CNR:CNR,
                BER:BER,
                pathLoss: pathLoss
            });
            res.redirect("/");
        }
        catch(error){
            console.log(error.message);
            res.redirect("/");
        }
    },
    viewEdit: async (req,res) =>{
        try{
            const {id} = req.params;
            const pengukuran = await Pengukuran.findOne({_id:id});
            res.render('dashboard/edit',{
                pengukuran
            })
        }   
        catch(error){
            console.log(error.message);
            res.redirect("/");
        }
    },
    actionEdit: async (req,res)=>{
        try{
            const{id} = req.params;
            const {namaTempat,deskripsi,latitude,longitude,SNR,CNR,BER,pathLoss} = req.body;
            const pengukuran = await Pengukuran.updateOne({_id:id},{
                namaTempat: namaTempat,
                deskripsi: deskripsi,
                latitude: latitude,
                longitude: longitude,
                SNR:SNR,
                CNR:CNR,
                BER:BER,
                pathLoss: pathLoss
            });
            res.redirect("/")
        }
        catch(error){
            console.log(error.message);
            res.redirect("/")
        }
    },
    actionDelete: async (req,res) => {
        try{
            const{id} = req.params;
            const pengukuran = await Pengukuran.findOneAndDelete({_id:id});
            res.redirect("/")
        }
        catch (error){
            console.log(error.message);
            res.redirect("/")
        }
    }
}