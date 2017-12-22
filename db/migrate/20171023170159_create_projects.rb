class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, default: ""
      t.text :description, default: ""
      t.string :github_url, default: ""
      t.timestamps
    end
  end
end
