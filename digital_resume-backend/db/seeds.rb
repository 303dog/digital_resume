

Program.create(title: "Digital Resume" ,program_lang:"Ruby/JS" , focus: "frontend" , repo: "https://github.com/303dog/digital_resume.git" , project_date: "2020-11-15" ,)
Program.create(title:"Family Game Night" ,program_lang:"Ruby" , focus: "Rails" , repo: "https://github.com/303dog/rails_proj_rate-family-game_night.git", project_date: "2020-09-15")
Program.create(title: "Home Storage" ,program_lang:"Ruby" , focus:"Sinatra" , repo: "https://github.com/303dog/sinatra_home_storage.git" , project_date: "2020-08-15")
Program.create(title:"Top 100" ,program_lang:"Ruby" , focus:"CLI" , repo: "https://github.com/303dog/top_100cli.git", project_date: "2020-06-15")

Comment.create(username:"Blitz123",fav_lang:"Ruby", experience: 1, about:"Fantastic code and structure!",program_id: 1)
Comment.create(username:"Blitz123",fav_lang:"Ruby", experience: 1, about:"it's getting there!",program_id: 2)
Comment.create(username:"Slowroll12",fav_lang:"JS", experience: 16, about:"could use some cleanup!",program_id: 3)
Comment.create(username:"Slowroll12",fav_lang:"JS", experience: 16, about:"it needs help!",program_id: 4)

