class RemoveExpFromComments < ActiveRecord::Migration[6.0]
  def change
    remove_column :comments, :exp, :string
  end
end
