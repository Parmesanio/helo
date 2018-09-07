module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        let { username, password, profile_url} = req.body;

        db.create_user([username, password, profile_url])
            .then(newUser => {
                res.send(newUser).redirect('/dashboard');
            })
            .catch(err => console.log('Err in db.create_user', err))
    }
}