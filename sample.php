<?php
namespace Jesus\Solid; 

/**
 * AreaCalculator
 * Ahora creamos la clase AreaCalculator, que recibe un array con los objetos de cada una de las figuras para ser sumadas
 */
class AreaCalculator
{
  protected $shapes;

  public function __construct($shapes = array(), $abc)
  {
      $this->shapes = $shapes;
      $variable = $abc;
  }

  public function sum()
  {
      // Aquí va la lógica para sumar todas las áreas
      $a = 1;
      $b = 2;
      return $a + $b;
  }

  public function output()
  {
    return implode('', array(
        "<h1>",
            "Suma de todas las áreas: ",
            $this->sum(),
        "</h1>"
      )
    ) ;
  }
}
