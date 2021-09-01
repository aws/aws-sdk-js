# Contributing Guide

## Help YARD Help You!

**YARD thrives off of the contributions of its users**. This project will gladly
review pull requests and issues. This document outlines how to maximize
the chance of a reported issue being resolved or pull request being accepted.

## Code of Conduct

**All reported issues, pull requests, communication, and code related to YARD**
**must follow the [Code of Conduct][code] or they will be moderated immediately**.
Please take time to familiarize yourself with the Code of Conduct before
you get started. Fundamentally, **you are expected to behave with respect** to all
other users.

## Filing a Bug Report

**You can submit bug reports on our [GitHub issue tracker][issues]**.

If you believe you have found a bug, please include a few things in your report:

1. **A minimal reproduction of the issue**. Providing a huge blob of code is
   better than nothing, but providing the shortest possible set of instructions
   is even better. Take out any instructions or code that, when removed, have
   no effect on the problematic behavior. The easier your bug is to triage and
   diagnose, the higher up in the priority list it will go. We can do this stuff,
   but limited time means this may not happen immediately. Make your bug report
   extremely accessible and you will almost guarantee a quick fix.

2. **Your environment and relevant versions**. Please include your Ruby,
   YARD, and system versions (including OS) when reporting a bug. This
   makes it easier to diagnose problems. If the issue or stack trace
   includes another library, consider also listing any dependencies
   that may be affecting the issue. This is where a minimal reproduction
   case helps a lot.

3. **Your expected result**. Tell us what you think should happen. This
   helps us to understand the context of your problem. Many complex features
   can contain ambiguous usage, and your use case may differ from the
   intended one. If we know your expectations, we can more easily determine
   if the behavior is intentional or not.

Finally, please **DO NOT** submit a report that states a feature simply
_"does not work"_ without any additional information in the report. Consider
the issue from the maintainer's perspective: in order to fix your bug, we
need to drill down to the broken line of code, and in order to do this,
we must be able to reproduce the issue on our end to find that line of
code. The easier we can do this, the quicker your bug gets fixed. Help
us help you by providing as much information as you possibly can. We may
not have the tools or environment to properly diagnose your issue, so
your help may be required to debug the issue.

Also **consider opening a pull request** to fix the issue yourself if you can.
This will likely speed up the fix time significantly. See below for
information on how to do this.

## Asking a Question

**Questions are accepted on [GitHub issues][issues], but consider signing up**
**for the [YARD mailing list][ml]** and asking it there so that we can organize
issues appropriately. You can also hop onto IRC (irc.freenode.net / #yard)
for quick questions.

## Asking for a Feature

**YARD does not currently accept feature requests filed as GitHub issues**. If
you are looking to have a feature implemented into YARD, consider doing this
yourself and [submitting a pull request][pr] (PR) with your work. If the work
required is involved, consider starting a discussion on the [mailing list][ml]
or opening an issue to ask a question; we will be happy to have a conversation
and let you know if the feature would be considered. They usually are, but
it might be prudent to ask first!

Please do not fret if your feature request gets closed immediately. We do this
to keep our issue tracker clean. **Closing an issue does not mean it would not**
**be accepted as a pull request**. If the feature would not be accepted as a
PR, this will be communicated in the closed issue.

## Making a Change via Pull Request

**You can also submit pull requests on our [GitHub issue tracker][issues]**.

If you've been working on a patch or feature that you want in YARD, here are
some tips to ensure the quickest turnaround time on getting it merged in:

1. **Keep your changes small**. If your feature is large, consider splitting
   it up into smaller portions and submit pull requests for each component
   individually. Feel free to describe this in your first PR or on the
   mailing list, but note that it will be much easier to review changes
   if they affect smaller portions of code at a time.

2. **Keep commits brief and clean**: YARD uses Git and tries to maintain a
   clean repository. Please ensure that you use [commit conventions][commit]
   to make things nice and neat both in the description and commit history.
   Specifically, consider squashing commits if you have partial or complete
   reverts of code. Each commit should provide an atomic change that moves
   the project forwards, not back. Any changes that only fix other parts of
   your PR should be hidden from the commit history.

3. **Follow our coding conventions**. YARD uses typical Ruby source formatting,
   though it occasionally has minor differences with other projects you may
   have seen. Please look through a few files (at least the file you are
   editing) to ensure that you are consistent in the formatting your PR is
   using.

4. **Make sure you have tests**. Not all changes require tests, but if your
   changes involve code, you should consider adding at least one new test
   case for your change (and ideally a couple of tests). This will add
   confidence when reviewing and will make accepting the change much easier.

5. **Make sure ALL the tests pass**. YARD has a fairly large suite of tests.
   Please make sure you can run all of the tests (`bundle exec rake`) prior
   to submitting your PR. Please also remember that YARD supports a number
   of environments, including OS X, Linux, Windows, and a number of older
   Ruby versions (1.8+), so if you can test under these environments, that
   helps (but is not required). At the very least, be aware of this fact
   when submitting code.

If your change is large, consider starting a discussion on the [mailing list][ml]
or opening an issue to ask a question; we will be happy to have a conversation
and let you know if the feature would be considered. They usually are, but
it might be prudent to ask first!

## Maintainers

**Interested in helping to maintain YARD? Email [lsegal@soen.ca][mail]** for more
information. Offering to be a project maintainer is an important contribution
to open source software, and your work will be highly valued in the community.
If you have been a contributor, consider being a member of the core team to
help handle day-to-day operations, such as releases, bug fixes, and triage.
You can do some of this as a non-maintainer too, but if you like this project,
we can always use more hands on deck!

[code]: https://github.com/lsegal/yard/blob/main/CODE_OF_CONDUCT.md
[issues]: http://github.com/lsegal/yard/issues
[commit]: http://chris.beams.io/posts/git-commit/
[pr]: https://help.github.com/articles/using-pull-requests/
[ml]: https://groups.google.com/forum/#!forum/yardoc
[mail]: mailto:lsegal@soen.ca
