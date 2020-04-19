/**
 * 
 */
$("#AddCart1").click(function () {
  var tbody = "<tr><td class='pro-thumbnail'><a href='#'><img src='img/product/1.jpg' alt='' /></a></td>"+
  " <td class='pro-title'><a href='#'>Le Parc Minotti Chair</a></td>"+
  " <td class='pro-price'><span class='amount'+>$169.00</span></td>"+
  "<td class='pro-quantity'><div class='product-quantity'><input type='text' value='1' /></div></td>"+
  "<td class='pro-subtotal'>$169.00</td>"+
  "<td class='pro-remove'><a href='#'>×</a></td></tr>";
  
  $("#add").append(tbody);
  
})