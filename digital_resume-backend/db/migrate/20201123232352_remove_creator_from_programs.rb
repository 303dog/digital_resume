class RemoveCreatorFromPrograms < ActiveRecord::Migration[6.0]
  def change
    remove_column :programs, :creator, :string
  end
end
