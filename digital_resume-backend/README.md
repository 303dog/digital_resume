# README

Digital Resume for JS/Rails Mod

Tables:

create_table programs

t.string :title
t.string :programming_lang
t.string :focus
t.string :repo
t.string :creator
t.datetime :project_date


create_table work_exp

t.string :company
t.string :location
t.datetime :dates
t.string :job_title
t.string :job_sum
###t.integer :job_id


create_table skills

t.string :hard_skill
t.string :soft_skill
t.string :technical_skill
t.string :attributes