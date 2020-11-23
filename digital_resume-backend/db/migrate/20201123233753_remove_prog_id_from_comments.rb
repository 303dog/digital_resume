class RemoveProgIdFromComments < ActiveRecord::Migration[6.0]
  def change
    remove_column :comments, :prog_id, :string
  end
end
