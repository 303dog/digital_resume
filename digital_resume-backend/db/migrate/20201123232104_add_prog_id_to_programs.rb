class AddProgIdToPrograms < ActiveRecord::Migration[6.0]
  def change
    add_column :programs, :prog_id, :integer
  end
end
