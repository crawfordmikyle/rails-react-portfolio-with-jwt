# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create([{first_name:"Mikyle",last_name:"Crawford",about:"about",github_url:"www.github.com",email:"crawfordmikyle@gmail.com",password:"password"}])
projects = Project.create([{title: "Test Project One",description:"project description"},{title: "Test Project Two",description:"project description"},{title: "Test Project Three",description:"project description"}])
blog_posts = BlogPost.create([{title: "Test Blog Post One", body:"blog post body"},{title: "Test Blog Post Two", body:"blog post body"},{title: "Test Blog Post Three", body:"blog post body"}])
messages = Message.create([{name: "Test Sender One", email: "test@test.com", phone:"206-222-2222", message_text:"test message content"},{name: "Test Sender One", email: "test@test.com", phone:"206-222-2222", message_text:"test message content"},{name: "Test Sender One", email: "test@test.com", phone:"206-222-2222", message_text:"test message content"}])