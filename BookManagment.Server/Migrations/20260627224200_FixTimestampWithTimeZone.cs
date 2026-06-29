using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookManagment.Server.Migrations
{
    /// <inheritdoc />
    public partial class FixTimestampWithTimeZone : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Alter audit_logs.created_at
            migrationBuilder.Sql("ALTER TABLE audit_logs ALTER COLUMN created_at TYPE timestamp with time zone USING created_at AT TIME ZONE 'UTC';");

            // Alter customers.created_at
            migrationBuilder.Sql("ALTER TABLE customers ALTER COLUMN created_at TYPE timestamp with time zone USING created_at AT TIME ZONE 'UTC';");

            // Alter employees.hired_at
            migrationBuilder.Sql("ALTER TABLE employees ALTER COLUMN hired_at TYPE timestamp with time zone USING hired_at AT TIME ZONE 'UTC';");

            // Alter inventory_movements.created_at
            migrationBuilder.Sql("ALTER TABLE inventory_movements ALTER COLUMN created_at TYPE timestamp with time zone USING created_at AT TIME ZONE 'UTC';");

            // Alter notifications.created_at
            migrationBuilder.Sql("ALTER TABLE notifications ALTER COLUMN created_at TYPE timestamp with time zone USING created_at AT TIME ZONE 'UTC';");

            // Alter orders.created_at
            migrationBuilder.Sql("ALTER TABLE orders ALTER COLUMN created_at TYPE timestamp with time zone USING created_at AT TIME ZONE 'UTC';");

            // Alter payments.paid_at
            migrationBuilder.Sql("ALTER TABLE payments ALTER COLUMN paid_at TYPE timestamp with time zone USING paid_at AT TIME ZONE 'UTC';");

            // Alter promotions.end_date
            migrationBuilder.Sql("ALTER TABLE promotions ALTER COLUMN end_date TYPE timestamp with time zone USING end_date AT TIME ZONE 'UTC';");

            // Alter promotions.start_date
            migrationBuilder.Sql("ALTER TABLE promotions ALTER COLUMN start_date TYPE timestamp with time zone USING start_date AT TIME ZONE 'UTC';");

            // Alter purchase_orders.ordered_at
            migrationBuilder.Sql("ALTER TABLE purchase_orders ALTER COLUMN ordered_at TYPE timestamp with time zone USING ordered_at AT TIME ZONE 'UTC';");

            // Alter purchase_orders.received_at
            migrationBuilder.Sql("ALTER TABLE purchase_orders ALTER COLUMN received_at TYPE timestamp with time zone USING received_at AT TIME ZONE 'UTC';");

            // Alter reviews.created_at
            migrationBuilder.Sql("ALTER TABLE reviews ALTER COLUMN created_at TYPE timestamp with time zone USING created_at AT TIME ZONE 'UTC';");

            // Alter shipments.delivered_at
            migrationBuilder.Sql("ALTER TABLE shipments ALTER COLUMN delivered_at TYPE timestamp with time zone USING delivered_at AT TIME ZONE 'UTC';");

            // Alter shipments.shipped_at
            migrationBuilder.Sql("ALTER TABLE shipments ALTER COLUMN shipped_at TYPE timestamp with time zone USING shipped_at AT TIME ZONE 'UTC';");

            // Alter shopping_carts.created_at
            migrationBuilder.Sql("ALTER TABLE shopping_carts ALTER COLUMN created_at TYPE timestamp with time zone USING created_at AT TIME ZONE 'UTC';");

            // Alter support_tickets.created_at
            migrationBuilder.Sql("ALTER TABLE support_tickets ALTER COLUMN created_at TYPE timestamp with time zone USING created_at AT TIME ZONE 'UTC';");

            // Alter support_tickets.updated_at
            migrationBuilder.Sql("ALTER TABLE support_tickets ALTER COLUMN updated_at TYPE timestamp with time zone USING updated_at AT TIME ZONE 'UTC';");

            // Alter users.created_at
            migrationBuilder.Sql("ALTER TABLE users ALTER COLUMN created_at TYPE timestamp with time zone USING created_at AT TIME ZONE 'UTC';");

            // Alter wishlists.created_at
            migrationBuilder.Sql("ALTER TABLE wishlists ALTER COLUMN created_at TYPE timestamp with time zone USING created_at AT TIME ZONE 'UTC';");

            // Alter wishlist_items.created_at
            migrationBuilder.Sql("ALTER TABLE wishlist_items ALTER COLUMN created_at TYPE timestamp with time zone USING created_at AT TIME ZONE 'UTC';");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Revert audit_logs.created_at
            migrationBuilder.Sql("ALTER TABLE audit_logs ALTER COLUMN created_at TYPE timestamp without time zone USING created_at AT TIME ZONE 'UTC';");

            // Revert customers.created_at
            migrationBuilder.Sql("ALTER TABLE customers ALTER COLUMN created_at TYPE timestamp without time zone USING created_at AT TIME ZONE 'UTC';");

            // Revert employees.hired_at
            migrationBuilder.Sql("ALTER TABLE employees ALTER COLUMN hired_at TYPE timestamp without time zone USING hired_at AT TIME ZONE 'UTC';");

            // Revert inventory_movements.created_at
            migrationBuilder.Sql("ALTER TABLE inventory_movements ALTER COLUMN created_at TYPE timestamp without time zone USING created_at AT TIME ZONE 'UTC';");

            // Revert notifications.created_at
            migrationBuilder.Sql("ALTER TABLE notifications ALTER COLUMN created_at TYPE timestamp without time zone USING created_at AT TIME ZONE 'UTC';");

            // Revert orders.created_at
            migrationBuilder.Sql("ALTER TABLE orders ALTER COLUMN created_at TYPE timestamp without time zone USING created_at AT TIME ZONE 'UTC';");

            // Revert payments.paid_at
            migrationBuilder.Sql("ALTER TABLE payments ALTER COLUMN paid_at TYPE timestamp without time zone USING paid_at AT TIME ZONE 'UTC';");

            // Revert promotions.end_date
            migrationBuilder.Sql("ALTER TABLE promotions ALTER COLUMN end_date TYPE timestamp without time zone USING end_date AT TIME ZONE 'UTC';");

            // Revert promotions.start_date
            migrationBuilder.Sql("ALTER TABLE promotions ALTER COLUMN start_date TYPE timestamp without time zone USING start_date AT TIME ZONE 'UTC';");

            // Revert purchase_orders.ordered_at
            migrationBuilder.Sql("ALTER TABLE purchase_orders ALTER COLUMN ordered_at TYPE timestamp without time zone USING ordered_at AT TIME ZONE 'UTC';");

            // Revert purchase_orders.received_at
            migrationBuilder.Sql("ALTER TABLE purchase_orders ALTER COLUMN received_at TYPE timestamp without time zone USING received_at AT TIME ZONE 'UTC';");

            // Revert reviews.created_at
            migrationBuilder.Sql("ALTER TABLE reviews ALTER COLUMN created_at TYPE timestamp without time zone USING created_at AT TIME ZONE 'UTC';");

            // Revert shipments.delivered_at
            migrationBuilder.Sql("ALTER TABLE shipments ALTER COLUMN delivered_at TYPE timestamp without time zone USING delivered_at AT TIME ZONE 'UTC';");

            // Revert shipments.shipped_at
            migrationBuilder.Sql("ALTER TABLE shipments ALTER COLUMN shipped_at TYPE timestamp without time zone USING shipped_at AT TIME ZONE 'UTC';");

            // Revert shopping_carts.created_at
            migrationBuilder.Sql("ALTER TABLE shopping_carts ALTER COLUMN created_at TYPE timestamp without time zone USING created_at AT TIME ZONE 'UTC';");

            // Revert support_tickets.created_at
            migrationBuilder.Sql("ALTER TABLE support_tickets ALTER COLUMN created_at TYPE timestamp without time zone USING created_at AT TIME ZONE 'UTC';");

            // Revert support_tickets.updated_at
            migrationBuilder.Sql("ALTER TABLE support_tickets ALTER COLUMN updated_at TYPE timestamp without time zone USING updated_at AT TIME ZONE 'UTC';");

            // Revert users.created_at
            migrationBuilder.Sql("ALTER TABLE users ALTER COLUMN created_at TYPE timestamp without time zone USING created_at AT TIME ZONE 'UTC';");

            // Revert wishlists.created_at
            migrationBuilder.Sql("ALTER TABLE wishlists ALTER COLUMN created_at TYPE timestamp without time zone USING created_at AT TIME ZONE 'UTC';");

            // Revert wishlist_items.created_at
            migrationBuilder.Sql("ALTER TABLE wishlist_items ALTER COLUMN created_at TYPE timestamp without time zone USING created_at AT TIME ZONE 'UTC';");
        }
    }
}
