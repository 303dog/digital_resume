class AddDemoLinkToPrograms < ActiveRecord::Migration[6.0]
  def change
    add_column :programs, :demo, :string
  end
end
