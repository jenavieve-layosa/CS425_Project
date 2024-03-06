import unittest
from flask import Flask
from flask_testing import TestCase
from app import create_app, db
from werkzeug.security import check_password_hash
from app.models import User
class AuthTestCase(TestCase):
    def create_app(self):
        app = create_app()
        app.config['TESTING'] = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
        return app
    def setUp(self):
        db.create_all()
    def tearDown(self):
        db.session.remove()
        db.drop_all()
    def test_signup_post(self):
        # Make a POST request to signup endpoint
        response = self.client.post('/api/signup', json={
            'email': 'newuser@example.com',
            'password': 'newpassword',
            'firstname': 'newfirstname',
            'lastname': 'newlastname',
            'account_type': 2
        })
        # Assert that the response status code is 200 (success)
        self.assertEqual(response.status_code, 200)
        # Assert that the new user is added to the database
        new_user = User.query.filter_by(email='newuser@example.com').first()
        self.assertIsNotNone(new_user)
        self.assertEqual(new_user.firstname, 'newfirstname')
        self.assertEqual(new_user.lastname, 'newlastname')
        self.assertEqual(new_user.user_type, 2)
        self.assertEqual(new_user.user_verified, False)
        self.assertTrue(check_password_hash(new_user.password,'newpassword'))
        
if __name__ == '__main__':
    unittest.main()