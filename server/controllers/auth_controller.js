module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        let { username, password, profile_url} = req.body;

        db.create_user([username, password, profile_url])
            .then(newUser => {
                console.log(newUser);
                
                req.session.userid = newUser
                res.send(req.session);
            })
            .catch(err => console.log('Err in db.create_user', err))
    },
    login: (req, res) => {
        console.log(req.body);
        
    }
}