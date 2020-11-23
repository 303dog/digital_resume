class AddProgIdToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :prog_id, :integer
  end
end
