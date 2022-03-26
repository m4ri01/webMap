
module.exports = {
    index: async(req, res, next) => {
        try {
            res.render('index', { title: 'Express' });
        } catch (error) {
            console.log(error.message);
        }
      }
}