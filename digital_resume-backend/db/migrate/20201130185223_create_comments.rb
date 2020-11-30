class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :username
      t.string :fav_lang
      t.string :about
      t.integer :program_id
      t.integer :experience

      t.timestamps
    end
  end
end
