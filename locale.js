var mixed = {
  default: 'Pole ${path} jest niepoprawne',
  required: 'Pole ${path} jest wymagane',
  oneOf: 'Pole ${path} musi mieć jedną z następujących wartości: ${values}',
  notOneOf: 'Pole ${path} nie może mieć jednej z następujących wartości: ${values}',
  defined: '${path} must be defined',
};

var string = {
  length: 'Pole ${path} musi mieć dokładnie ${length} znaków',
  min: 'Pole ${path} musi mieć conajmniej ${min} znaków',
  max: 'Pole ${path} może mieć conajwyej ${max} znaków',
  matches: 'Pole ${path} musi pasować do następującego wzorca: "${regex}"',
  email: 'Pole ${path} musi być poprawnym adresem email',
  url: 'Pole ${path} musi być poprawnym adresem URL',
  uuid: 'Pole ${path} musi być poprawnym identyfikatorem UUID',
  trim: 'Pole ${path} musi być tekstem bez spacji na początku i na końcu',
  lowercase: 'Pole ${path} może mieć tylko małe litery',
  uppercase: 'Pole ${path} może mieć tylko wielkie litery',
};

var number = {
  min: 'Pole ${path} musi być liczbą większą lub równą ${min}',
  max: 'Pole ${path} musi być liczą mniejsa lub równą ${max}',
  lessThan: 'Pole ${path} musi być liczbą mniejszą od ${less}',
  moreThan: 'Pole ${path} musi być liczbą więszką od ${more}',
  positive: 'Pole ${path} musi być liczbą dodatnią',
  negative: 'Pole ${path} musi być liczbą ujemną',
  integer: 'Pole ${path} musi być liczbą całkowitą',
};

var date = {
  min: 'Pole ${path} musi zawierać datę późniejszą niż ${min}',
  max: 'Pole ${path} musi zawierać datę wcześniejszą niż ${max}',
};

var boolean = {
  isValue: 'Pole ${path} musi być ${value}',
};

var object = {
  noUnknown: 'Pole ${path} zawiera nieznane klucze: ${unknown}',
};

var array = {
  min: 'Pole ${path} musi zawierać conajmniej ${min} elementów',
  max: 'Pole ${path} może zawierać conajwyżej ${max} elementów',
  length: 'Pole ${path} musi mieć dokładnie ${length} elementów',
};

module.exports = Object.assign(Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
});
