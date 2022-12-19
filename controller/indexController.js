exports.homeController = async (req, res, next) => {

    res.render('index', { title: 'codingThings' });

}