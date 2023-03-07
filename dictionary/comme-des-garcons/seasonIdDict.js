// season ID dictionary for the different season IDs and their corresponding season (if one) and year pairs
// categorized alphabetically
// key: season ID / value: [list of [season, year] pairs]
// 'S' is for Spring/Summer and 'W' is for Autumn/Winter
// for U and Z, there is no specific season and year pair they refer to
const seasonID_dict = {
  A: [
    ["S", 2008],
    ["S", 2018],
  ],
  B: [
    ["W", 2008],
    ["W", 2018],
  ],
  C: [
    ["W", 2001],
    ["S", 2009],
    ["S", 2019],
  ],
  D: [
    ["W", 2001],
    ["W", 2009],
    ["W", 2019],
  ],
  E: [
    ["S", 2002],
    ["S", 2010],
    ["S", 2020],
  ],
  F: [
    ["S", 2002],
    ["W", 2010],
    ["W", 2020],
  ],
  G: [
    ["W", 2002],
    ["S", 2011],
    ["S", 2021],
  ],
  H: [
    ["W", 2002],
    ["W", 2011],
    ["W", 2021],
  ],
  I: [
    ["S", 2003],
    ["S", 2012],
    ["S", 2022],
  ],
  J: [
    ["S", 2003],
    ["W", 2012],
    ["W", 2022],
  ],
  K: [
    ["W", 2003],
    ["S", 2013],
    ["S", 2023],
  ],
  L: [
    ["W", 2003],
    ["W", 2013],
  ],
  M: [
    ["S", 2004],
    ["S", 2014],
  ],
  N: [
    ["W", 2004],
    ["W", 2014],
  ],
  O: [
    ["S", 2005],
    ["S", 2015],
  ],
  P: [
    ["W", 2005],
    ["W", 2015],
  ],
  Q: [
    ["S", 2006],
    ["S", 2016],
  ],
  R: [
    ["W", 2006],
    ["W", 2016],
  ],
  S: [
    ["S", 2007],
    ["S", 2017],
  ],
  T: [
    ["W", 2007],
    ["W", 2017],
  ],
  U: [
    ["", 2001],
    ["", 2002],
    ["", 2003],
    ["", 2004],
    ["", 2005],
    ["", 2006],
    ["", 2007],
    ["", 2008],
    ["", 2009],
    ["", 2010],
    ["", 2011],
    ["", 2012],
    ["", 2013],
    ["", 2014],
    ["", 2015],
    ["", 2016],
    ["", 2017],
    ["", 2018],
    ["", 2019],
    ["", 2020],
    ["", 2021],
    ["", 2022],
    ["", 2023],
  ],
  Z: [
    ["", 2001],
    ["", 2002],
    ["", 2003],
    ["", 2004],
    ["", 2005],
    ["", 2006],
    ["", 2007],
    ["", 2008],
    ["", 2009],
    ["", 2010],
    ["", 2011],
    ["", 2012],
    ["", 2013],
    ["", 2014],
    ["", 2015],
    ["", 2016],
    ["", 2017],
    ["", 2018],
    ["", 2019],
    ["", 2020],
    ["", 2021],
    ["", 2022],
    ["", 2023],
  ],

  LC: [["W", 2019]],
  PP: [
    ["W", 2005],
    ["S", 2006],
    ["W", 2015],
  ],
};

export default seasonID_dict;
