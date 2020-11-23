class AddExpToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :exp, :integer
  end
end
