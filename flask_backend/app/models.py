from flask_login import UserMixin
from sqlalchemy import ForeignKey
from . import db



class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True) # primary keys are required by SQLAlchemy
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    firstname = db.Column(db.String(500))
    lastname = db.Column(db.String(500))
    user_type = db.Column(db.Integer) # 0 for student, 1 for teacher, 2 for independent learner, 3 for admin (can be updated as we go)
    user_verified = db.Column(db.Boolean)

class Lesson(db.Model):
    lesson_id = db.Column(db.Integer, primary_key=True)
    lesson_title = db.Column(db.String(100))
    lesson_content = db.Column(db.String(100000))

class LessonProgress(db.Model):
    id = db.Column(db.Integer, primary_key=True) # primary keys are required by SQLAlchemy
    user_id = db.Column(db.Integer, ForeignKey(User.id)) #foreign key is the user id
    lesson_id = db.Column(db.Integer, ForeignKey(Lesson.lesson_id)) #foreign key is the lesson id
    progress = db.Column(db.Float) #value between 0 and 1
    current_code = db.Column(db.String(100000)) #current code the user is working on

class UserClass(db.Model):
    class_code = db.Column(db.Integer, unique=True, primary_key=True) # primary keys are required by SQLAlchemy
    user_id = db.Column(db.Integer, ForeignKey(User.id)) #foreign key is the user id
    teacher_email = db.Column(db.String(100), ForeignKey(User.email)) #foreign key is the teacher email


# bitnami pword CGrZa4J+0I/u