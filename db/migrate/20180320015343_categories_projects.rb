class CategoriesProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :categories_projects do |t|
      t.integer :category_id
      t.integer :project_id
    end
  end
end
