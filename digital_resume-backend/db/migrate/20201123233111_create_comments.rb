class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :username
      t.string :fav_lang
      t.string :exp
      t.string :about
      t.string :prog_id

      t.timestamps
    end
  end
end
