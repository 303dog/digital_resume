class RemoveProgIdFromPrograms < ActiveRecord::Migration[6.0]
  def change
    remove_column :programs, :prog_id, :integer
  end
end
