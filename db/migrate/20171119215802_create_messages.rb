class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :sender_name
      t.string :sender_email
      t.string :sender_phone
      t.text :sender_messages
      t.timestamps
    end
  end
end
