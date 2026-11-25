Feature: Remove individual items from the shopping cart

  Scenario: Shopper deletes one item without affecting other cart items
    Given the shopper has multiple items in their cart
    And the shopper is viewing the cart page
    When the shopper clicks "Delete" next to one item
    Then the selected item should be removed from the cart
    And the other items should remain in the cart