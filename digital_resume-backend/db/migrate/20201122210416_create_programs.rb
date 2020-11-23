class CreatePrograms < ActiveRecord::Migration[6.0]
  def change
    create_table :programs do |t|
      t.string :title
      t.string :programming_lang
      t.string :focus
      t.string :repo
      t.string :creator
      t.datetime :project_date

      t.timestamps
    end
  end
end
