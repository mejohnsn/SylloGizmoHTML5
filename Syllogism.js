/* This is the Javascript version of Syllogismo.java */

function CatStatement(quantifier,  term1, term2)
{
    this.Quantifier = quantifier;
    this.Term1 = term1;
    this.Term2 = term2;
    // Now do those not supplied by constructor args:
    this.Verb  = "are";
}

function Syllogism(minorPremise, majorPremise, conclusion)
// TODO: think about implication of immutability: surely the concatenation of this.Mood = this.Mood + "I' etc. is not quite right.
// Same for Figure?
{
    this.MinorPremise = minorPremise;
    this.MajorPremise = majorPremise;
    this.Conclusion = conclusion;
    // Now do those not supplied by constructor args: these will be set to legitimate values by logic below
    this.Mood = "";
    this.Figure = 0;
    this.F = "";
    this.G = "";
    this.H = "";

    if (MajorPremise.Quantifier == "All") {
	this.Mood = "A";
    } else if (MajorPremise.Quantifier == "Some") {
	if (MajorPremise.Verb == "are") {
	    this.Mood = "I"
	} else {
	    this.Mood = "O";
	}
    }
    if (MajorPremise.Quantifier == "No") {
	this.Mood = "E";
    }
    // at first glance, above looks correct for setting first letter of mood, followng Syllogismo.java

// Now for second letter: same logic, but appending now w/ '+':
    if (MajorPremise.Quantifier == "All") {
	this.Mood = this.Mood + "A";
    } else if (MajorPremise.Quantifier == "Some") {
	if (MajorPremise.Verb == "are") {
	    this.Mood = this.Mood + "I"
	} else {
	    this.Mood = this.Mood + "O";
	}
    }
    if (MajorPremise.Quantifier == "No") {
	this.Mood = this.Mood + "E";
    }
// And finally same for third & last letter: same logic, but appending now w/ '+':
    if (MajorPremise.Quantifier == "All") {
	this.Mood = this.Mood + "A";
    } else if (MajorPremise.Quantifier == "Some") {
	if (MajorPremise.Verb == "are") {
	    this.Mood = this.Mood + "I"
	} else {
	    this.Mood = this.Mood + "O";
	}
    }
    if (MajorPremise.Quantifier == "No") {
	this.Mood = this.Mood + "E";
    }
    // Now set the letters FGH, starting with F and H: minor & major terms resp.
    F = Conclusion.X;
    H = Conclusion.Y;
    if (MinorPremise.X == G) {
	G = MinorPremise.Y;
    }
    else {
	G = MinorPremise.X;
    }
    // Now test that G also in MajorPremise, badTerms if not, check later
    // TODO: add this code.
}

// which of the several constructors do I actually use? There is no use of it in this file:


// SylloGizmo.java  uses CatStatement(String, String, String).
// This is the only version it uses. So the above will do fine.
