class CreateFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :followee_id, null: false
      t.timestamps
    end

    add_index :follows, [:user_id, :followee_id]
  end
end
