/**
 * !Grasshopper - Grade book
Complete la función para que encuentre el promedio de las tres puntuaciones que se le pasaron y devuelva el valor de la letra asociada con esa calificación.

| Puntuación numérica | Calificación de letras |
| --- | --- |
| 90 <= puntuación <= 100 | 'A' |
| 80 <= puntuación < 90 | 'B' |
| 70 <= puntuación < 80 | 'C' |
| 60 <= puntuación < 70 | 'D' |
| 0 <= puntuación < 60 | 'F' |

Los valores probados están todos entre 0 y 100. No es necesario comprobar si hay valores negativos o valores superiores a 100.

*/

function getGrade (s1, s2, s3) {
    let score = (s1+s2+s3)/3
    
    if (score >= 90 && score <= 100) {
          return 'A';
      } else if (score >= 80 && score < 90) {
          return 'B';
      } else if (score >= 70 && score < 80) {
          return 'C';
      } else if (score >= 60 && score < 70) {
          return 'D';
      } else if (score >= 0 && score < 60) {
          return 'F';
      } else {
          return 'Invalid score'; // To handle scores outside the range 0-100
      }
  }