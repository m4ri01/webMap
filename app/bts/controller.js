const BTS = require('./model');

module.exports = {
    index: async(req, res) => {
        try {
            const bts = await BTS.find().sort({nodeBID:1,radius:-1});
            console.log(bts)
            res.render('bts/view_bts',{bts});
        } catch (error) {
            console.log(error.message);
        }
    },
    viewCreate : async (req,res) =>{
        try{
            res.render('bts/create');
        }
        catch(error){
            console.log(error.message)
        }
    },
    actionCreate: async(req, res) =>{
        try{
            const {nodeBID,latitude,longitude,antennaHeight,band,bandwidth,scPower,EIRP,pnLoss,shadowFading,MAPL,radius} = req.body;
            const bts = await BTS.create({
                nodeBID: nodeBID,
                latitude: latitude,
                longitude: longitude,
                antennaHeight: antennaHeight,
                band: band,
                bandwidth: bandwidth,
                scPower: scPower,
                EIRP: EIRP,
                pnLoss: pnLoss,
                shadowFading:shadowFading,
                MAPL: MAPL,
                radius: radius
            });
            res.redirect("/bts");
        }
        catch(error){
            console.log(error.message);
            res.redirect("/bts");
        }
    },
    viewEdit: async (req,res) =>{
        try{
            const {id} = req.params;
            const bts = await BTS.findOne({_id:id});
            res.render('bts/edit',{
                bts
            })
        }   
        catch(error){
            console.log(error.message);
            res.redirect("/bts");
        }
    },
    actionEdit: async (req,res)=>{
        try{
            const{id} = req.params;
           const {nodeBID,latitude,longitude,antennaHeight,band,bandwidth,scPower,EIRP,pnLoss,shadowFading,MAPL,radius} = req.body;
            const bts = await BTS.updateOne({_id:id},{
                nodeBID: nodeBID,
                latitude: latitude,
                longitude: longitude,
                antennaHeight: antennaHeight,
                band: band,
                bandwidth: bandwidth,
                scPower: scPower,
                EIRP: EIRP,
                pnLoss: pnLoss,
                shadowFading:shadowFading,
                MAPL: MAPL,
                radius: radius
            });
            res.redirect("/bts")
        }
        catch(error){
            console.log(error.message);
            res.redirect("/bts")
        }
    },
    actionDelete: async (req,res) => {
        try{
            const{id} = req.params;
            const bts = await BTS.findOneAndDelete({_id:id});
            res.redirect("/bts")
        }
        catch (error){
            console.log(error.message);
            res.redirect("/bts  ")
        }
    }
}