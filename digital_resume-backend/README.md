# README

Digital Resume for JS/Rails Mod

Tables:

create_table programs       has_many comments

t.string :title
t.string :programming_lang
t.string :focus
t.string :repo
t.string :creator
t.datetime :project_date

create_table comments       belongs_to program

t.string :username
t.string :fav_lang
t.integer :exp
t.integer :about
t.integer :program_id

create_table languages

t.string :prog_id
t.string :com_id



=====================================================================
#create_table work_exp     has_many :attribute
#
#t.string :company
#t.string :location
#t.datetime :dates
#t.string :job_title
#t.string :job_sum 
#
#
#
#create_table attribute      has_many :work_exp
#
#t.string :hard_skill
#t.string :soft_skill
#t.string :technical_skill
#t.string :traits
#t.integer :attribute.id
#
#
#
#
#