class AddAboutToPrograms < ActiveRecord::Migration[6.0]
  def change
    add_column :programs, :about, :string
  end
end
